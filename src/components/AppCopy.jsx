import logo from "./logo.svg";
import "./App.css";

// react component | JSX
function App() {
  const name = "react";

  return (
    <>
      <div className="tt">{name}</div>
      {name === "react" ? <h1>This is React</h1> : <h2>This is not react</h2>}
      {name === "react" && <h1>yes</h1>}

      {/* name is false */}
      {name || "not react"}
    </>
  );
}

export default App;
