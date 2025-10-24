import React from "react";
import TodoItem from "./TodoItem";

const CompletedTaskList = ({ completedTodos }) => {
  return (
    <div
      style={{
        backgroundColor: "#F1F1F1",
        borderRadius: "1rem",
        minHeight: "70vh",
        minWidth: "40%",
        padding: "0.5rem",
        margin: "0.5rem",
      }}
    >
      <h2 style={{ marginLeft: "1rem" }}>Completed Tasks</h2>
      <ul>
        {completedTodos.map((todo) => {
          return <TodoItem key={todo.id} {...todo} />;
        })}
      </ul>
    </div>
  );
};

export default CompletedTaskList;
