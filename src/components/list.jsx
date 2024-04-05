import { useState } from "react";
import "./list.css";

export function List({ robots, removeRobot }) {
  const [search, setSearch] = useState("");
  return (
    <dir className="list">
      <h1>List of robot friends</h1>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="search"
        placeholder="search"
      ></input>
      <div className="robots">
        {robots.map((r, i) => {
          if (r.toLocaleLowerCase().includes(search.toLowerCase()))
            return (
              <div key={i} className="card">
                <h1>{r}</h1>
                <img
                  width={218}
                  height={218}
                  src={"https://robohash.org/" + r}
                  alt=""
                />
                <button
                  onClick={(e) => {
                    removeRobot(i);
                  }}
                >
                  {" "}
                  Delete
                </button>
              </div>
            );
        })}
      </div>
    </dir>
  );
}
