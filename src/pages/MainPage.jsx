import React from "react";
import { todos } from "../data/todos";
import PendingTaskList from "../components/PendingTaskList";
import CompletedTaskList from "../components/CompletedTaskList";

const MainPage = () => {
  const pendingTodos = todos.filter((todo) => {
    return todo.status.toLowerCase() === "pending";
  });

  const completedTodos = todos.filter((todo) => {
    return todo.status.toLowerCase() === "completed";
  });

  return (
    <div>
      <div style={{ textAlign: "center", margin: "3rem", display:"flex", justifyContent:'center', alignItems:"center"}}>
        <input
          style={{
            width: "30%",
            padding: "10px 1.3rem",
            fontSize: "1.3rem",
            borderRadius: "2rem",
          }}
          placeholder="Enter a Task"
        ></input>
        <button style={{marginLeft:"1rem", backgroundColor:"#3B8CB7", color:"#FFF" ,padding:"0 1rem", height:"40px", fontSize:"1.5rem", borderRadius:"1rem"}}>Submit</button>
      </div>
      <div style={{margin: "1rem 5%", display: "flex", justifyContent:"center", alignItems:"center"}}>
        <PendingTaskList pendingTodos={pendingTodos} />
        <CompletedTaskList completedTodos={completedTodos} />
      </div>
    </div>
  );
};

export default MainPage;
