import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import Sub from "./utils/types";

const INITIAL_STATE = [
  {
    id: 1,
    nick: "ivandev",
    months: 3,
    avatar: "https://i.pravatar.cc/150?u=ivandev",
    description: "Moderador de vez en cuando...",
  },
  {
    id: 2,
    nick: "mainte123",
    months: 5,
    avatar: "https://i.pravatar.cc/150?u=mainte123",
  },
];

function App() {
  const [subs, setSubs] = useState<Sub[]>([]);

  useEffect(() => {
    setSubs(INITIAL_STATE);
  }, []);

  const handleNewSub = (newSub: Sub): void => {
    setSubs((subs) => [...subs, newSub]);
  };
  return (
    <>
      <div className="app">
        <h1>Subs de midu!</h1>
        <List subs={subs}></List>
        <Form onNewSub={handleNewSub}></Form>
      </div>
    </>
  );
}

export default App;
