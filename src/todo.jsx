import React, { useState } from "react";

function ToDo(props) {
  const [isDone, setDone] = useState(false);

  const [design, setDesign] = useState({
    fontFamily: "cursive",
    padding: "6px 0"
  });

  function change() {
    setDone(true);
    setDesign({
      fontFamily: "cursive",
      textDecoration: "line-through",
      color: "green",
      padding: "6px 0"
    });
  }
  function change2() {
    setDone(false);
    setDesign({
      fontFamily: "cursive",
      color: "black",
      padding: "6px 0"
    });
  }

  function caller() {
    props.twoClick(props.id);
  }

  return (
    <li
      style={design}
      onClick={isDone ? change2 : change}
      onDoubleClick={caller}
    >
      {props.text}
    </li>
  );
}

export default ToDo;
