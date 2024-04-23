import { useState } from "react";

function Username({ onSubmit }) {
  const [name, setName] = useState("");

  function submit(e) {
    e.preventDefault();
    onSubmit(name);
    setName("");
  }

  return (
    <div>
      <form onSubmit={submit}>
        <input
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Username;
