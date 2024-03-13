import { useState } from "react";
import Counter from "./Counter";
import Message from "./Message";
import Username from "./Username";

function App() {
  const [name, setName] = useState("NULL");

  const getName = (n) => {
    setName(n);
  };

  return (
    <div>
      <Message name={name}></Message>
      <Counter></Counter>
      <Username onSubmit={getName}></Username>
    </div>
  );
}

export default App;
