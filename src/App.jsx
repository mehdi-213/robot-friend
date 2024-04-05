import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "./components/header";
import { Form } from "./components/form";
import { List } from "./components/list";
function App() {
  const [count, setCount] = useState(0);
  const [robots, setRobots] = useState(["R2D", "C3P0"]);

  function removeRobot(index) {
    const newRobots = robots.filter((r, i) => i !== index);
    setRobots(newRobots);
  }

  function addRobots(name) {
    setRobots([...robots, name]);
  }

  return (
    <>
      <Header></Header>
      <Form addRobots={addRobots}></Form>
      <List robots={robots} removeRobot={removeRobot}></List>
    </>
  );
}

export default App;
