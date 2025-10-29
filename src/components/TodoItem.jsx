import React, { useState } from "react";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const TodoItem = ({
  id,
  title,
  status,
  handleTodoStatusChange,
  handleTodoDelete,
  changeParentTodoTitle,
  todoId,
  setTodoId,
}) => {
  const [todoTitle, setTodoTitle] = useState(title);
  const [disabled, setDisabled] = useState(true);

  const handleEditTodoTitle = () => {
    if (disabled) {
      setDisabled(false);
    } else {
      setDisabled(true);
      if (title !== todoTitle) {
        changeParentTodoTitle(id, todoTitle);
      }
    }
  };

  const handleChangeTodoTitle = (e) => {
    setTodoTitle(e.target.value);
  };

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
     {
      todoId===id?
      ( <input
        value={todoTitle}
        disabled={disabled}
        onChange={handleChangeTodoTitle}
        style={{ width: "300px" }}
      />):
      (
        <label style={{ width: "300px" }}>{todoTitle}</label>
      )
     }

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
          onClick={()=>{
            if(disabled){
              setTodoId(id);
            }
            else{
              setTodoId(null);
            }
            handleEditTodoTitle();
          }}
        >
          {disabled ? <MdModeEdit /> : <FaSave />}
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
          onClick={() => handleTodoDelete(id)}
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
          onClick={() => handleTodoStatusChange(id)}
        >
          {status === "completed" ? <FaArrowLeft /> : <FaArrowRight />}
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
