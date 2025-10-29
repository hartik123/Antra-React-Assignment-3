import React from "react";
import TodoItem from "./TodoItem";

const PendingTaskList = ({ pendingTodos, handleTodoStatusChange, handleTodoDelete, changeParentTodoTitle, todoId, setTodoId}) => {
  console.log(pendingTodos);
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
      <h2 style={{ marginLeft: "1rem" }}>Pending Tasks</h2>
      <ul>
        {pendingTodos.map((todo) => {
          return <TodoItem key={todo.id} {...todo} handleTodoStatusChange={handleTodoStatusChange} handleTodoDelete={handleTodoDelete} changeParentTodoTitle={changeParentTodoTitle} todoId={todoId}
          setTodoId={setTodoId}/>;
        })}
      </ul>
    </div>
  );
};

export default PendingTaskList;
