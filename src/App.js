import MyComponent from "./components/MyComponents";
import Counter from "./components/Counter";
import Say from "./components/Say";
import EventPratice from "./components/EventPratice";
import IterationSample from "./components/IterationSample";

// App : 부모 component
const App = () => {
  const parentEvent = () => {
    console.log("parent Event!");
  };
  return (
    <>
      <MyComponent name="react" name2="react2">
        <h2>hello!!</h2>
      </MyComponent>
      <br />
      <MyComponent /> <br />
      <MyComponent /> <input /> <br />
      <Counter />
      <Say />
      <EventPratice onClick={parentEvent} />
      <IterationSample />
    </>
  );
};

export default App;
