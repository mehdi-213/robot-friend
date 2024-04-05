import { useState } from "react";
import "./from.css";

export function Form({ addRobots }) {
  const [name, setName] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addRobots(name);
      }}
      className="form"
    >
      <h2>Add Robot</h2>
      <label>Robot Name</label>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="exempel:R2D2 C3P0"
      />
      <div>Robot Image</div>
      {name && (
        <img
          src={"https://robohash.org/" + name}
          alt=""
          width={96}
          height={96}
        />
      )}

      <button>Add Friends</button>
    </form>
  );
}
