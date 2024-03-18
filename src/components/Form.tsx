import React, { useReducer } from "react";
import Sub from "../utils/types";

interface FormState {
  inputValues: Sub;
}

interface FormProps {
  onNewSub: (newSub: Sub) => void;
}

type FormReducerAction =
  | {
      type: "change_value";
      payload: {
        inputName: string;
        inputValue: string;
      };
    }
  | {
      type: "clear";
    };

const INITIAL_STATE = {
  nick: "",
  months: 0,
  avatar: "",
  description: "",
};

const Form = ({ onNewSub }: FormProps) => {

  const formReducer = (
    state: FormState["inputValues"],
    action: FormReducerAction
  ) => {
    switch (action.type) {
      case "change_value":
        const { inputName, inputValue } = action.payload;
        return {
          ...state,
          [inputName]: inputValue,
        };
      case "clear":
        return INITIAL_STATE;

      default:
        return state;
    }
  };

  const [inputValues, dispatch] = useReducer(formReducer, INITIAL_STATE);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onNewSub(inputValues);
    handleClick();
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    dispatch({
      type: "change_value",
      payload: {
        inputName: name,
        inputValue: value,
      },
    });
  };

  const handleClick = () => {
    dispatch({
      type: "clear",
    });
  };

  return (
    <div className="form-cnt">
      <form onSubmit={handleSubmit}>
        <input
          name="nick"
          type="text"
          placeholder="Indica el nombre del sub"
          value={inputValues.nick}
          onChange={handleChange}
        />
        <input
          name="months"
          type="text"
          placeholder="month"
          value={inputValues.months}
          onChange={handleChange}
        />
        <input
          name="avatar"
          type="text"
          placeholder="Indica el avatar"
          value={inputValues.avatar}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Indica el description"
          value={inputValues.description}
          onChange={handleChange}
        />
        <button type="submit">Crear!</button>
        <button onClick={handleClick} type="button">
          Clear
        </button>
      </form>
    </div>
  );
};

export default Form;
