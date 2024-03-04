import React from "react";
import "./styles.css";


function Button({ color, disabled, text }) {
  const buttonStyle = {
    color: color,
    backgroundColor: "rebeccapurple",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  };

  return (
    <button style={buttonStyle} disabled={disabled}>{text}</button>
  );
}

export default function App() {
  return (
    <div className="App">
      <Button color="white" disabled={false} text="Click me" />
    </div>
  );
}