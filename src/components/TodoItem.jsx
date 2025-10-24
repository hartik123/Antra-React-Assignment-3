import React from "react";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";

const TodoItem = ({ id, title }) => {
  return (
    <li
      key={id}
      style={{
        borderRadius: "5px",
        backgroundColor: "#E4E1D4",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
        margin: "1rem",
      }}
    >
      {title}

      <div>
        <button
          style={{
            backgroundColor: "#3B8CB7",
            color: "white",
            borderWidth: "0px",
            marginLeft: "1rem",
            padding: "5px",
            borderRadius: "3px",
          }}
        >
          <MdModeEdit />
        </button>
        <button
          style={{
            backgroundColor: "#BB534D",
            color: "white",
            borderWidth: "0px",
            margin: "auto 0.8rem",
            padding: "5px",
            borderRadius: "3px",
          }}
        >
          <MdDelete />
        </button>
        <button
          style={{
            backgroundColor: "#8EAC56",
            color: "white",
            borderWidth: "0px",
            padding: "5px",
            borderRadius: "3px",
          }}
        >
          <FaArrowRight />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
