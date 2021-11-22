import { useState } from "react";

const Say = () => {
  // const [number, setNumber] = useState(0);

  // useState함수 return 값을 message에 넣어줌 (return = "")
  const [message, SetMessage] = useState("");
  const [color, setColor] = useState("black");
  const [style, setStyle] = useState({ color: "white", background: "black" });

  const handleEnter = () => {
    SetMessage("hello");
    // message = "hello";
  };

  const handleLeave = () => {
    SetMessage("bye");
    // message = "bye";
  };

  const handleChange = (color) => {
    // const newStyle = { ...style };
    // newStyle.color = color;

    // setStyle(newStyle);

    // 객체인경우 ...으로 copy해서 
    setStyle({ ...style, color });
  };
  return (
    <>
      <div>
        <button onClick={handleEnter}>Enter</button>
        <button onClick={handleLeave}>Leave</button>
        <h1 style={style}>{message}</h1>
        {/* <h1 style={{ color }}>{message}</h1> */}
        {/* // color: color -> 이름이 같으므로 color로 처리해도 됨! */}
        <button style={{ color: "red" }} onClick={() => handleChange("red")}>
          red
        </button>
        <button
          style={{ color: "green" }}
          onClick={() => handleChange("green")}
        >
          green
        </button>
        <button style={{ color: "blue" }} onClick={() => handleChange("blue")}>
          blue
        </button>
      </div>
    </>
  );
};

export default Say;
