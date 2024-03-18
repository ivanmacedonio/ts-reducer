import Sub from "../utils/types";

interface Props {
  subs: Sub[];
}

const List: React.FC<Props> = ({ subs }) => {
  return (
    <div className="list-cnt">
      <ul>
        {subs.map((sub) => {
          return (
            <li key={sub.id}>
              <img src={sub.avatar} alt="" />
              <h5>{sub.nick}</h5>
              <p>{sub.description?.substring(0, 100)}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
