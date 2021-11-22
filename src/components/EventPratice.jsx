import { useState } from "react";

const EventPratice = ({ onClick }) => {
  let value;
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");

  const [form, setForm] = useState({ message: "", username: "" });

  const handleChange = (e) => {
    // e = event
    // console.log(e.target.value);
    // value = e.target.value;
    // setMessage(e.target.value);
    // onClick();

    const { name, value } = e.target;

    console.log(`name:${name}, value;${value}`);
    setForm({ ...form, [name]: value }); // const name을 처리하기 위해 [] 붙임 (안붙이면 "name")
  };

  const handleChangeName = (e) => {
    setUsername(e.target.value);
  };

  const handleClick = () => {
    // alert(value); // 왜 안나오지?
    // alert(message + ":" + username);
    const { username, message } = form;
    alert(`${username}:${message}`);

    setForm({ message: "", username: "" });
  };

  const handleKeyPress = (e) => {
    console.log(e.key);
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <>
      <input
        placeholder="username"
        name="username"
        value={form.username}
        onChange={handleChange}
      ></input>
      <input
        placeholder="message"
        name="message"
        onKeyPress={handleKeyPress}
      ></input>
      <button onClick={handleClick}>check</button>
    </>
  );
};

export default EventPratice;
