import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from 'axios';

import { todosData } from "../data/todos";
import PendingTaskList from "../components/PendingTaskList";
import CompletedTaskList from "../components/CompletedTaskList";

const MainPage = () => {
  const [todos, setTodos] = useState(todosData ||[]);
  const [todoTitle, setTodoTitle] = useState("");
  const [todoId, setTodoId] = useState(null);

  useEffect(()=>{
    axios.get('https://dummyjson.com/todos?limit=10')
    .then(res=>{
      const fetchedTodos = res.data.todos;
      const formattedTodos = fetchedTodos.map(todo=>{
        return {
          id: todo.id,
          title: todo.todo,
          status: todo.completed?"completed":"pending"
        }
      })
      setTodos(formattedTodos);
    })
    .catch(err=>{
      console.log(err)
    })
  }, [])

  const pendingTodos = todos.filter((todo) => {
    return todo.status.toLowerCase() === "pending";
  });

  const completedTodos = todos.filter((todo) => {
    return todo.status.toLowerCase() === "completed";
  });

  const handleTodoTitleChange = (e) => {
    setTodoTitle(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!todoTitle) {
      alert("Title Cannot be Empty");
      return;
    }
    const uniqueId = uuidv4();
    const todoTemp = {
      id: uniqueId,
      title: todoTitle,
      status: "pending",
    };
    setTodos((prev) => [...prev, todoTemp]);
    setTodoTitle("");
    alert("Added todo successfully");
  };

  const handleTodoStatusChange = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              status: todo.status === "completed" ? "pending" : "completed",
            }
          : todo
      )
    );
  };

  const handleTodoDelete = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  const changeParentTodoTitle = (id, title) => {
    console.log(id, title);
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        return todo.id === id ? { ...todo, title: title } : todo;
      });
    });
  };

  return (
    <div>
      <div
        style={{
          textAlign: "center",
          margin: "3rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form onSubmit={handleAddTodo}>
          <input
            style={{
              padding: "10px 1.3rem",
              fontSize: "1.3rem",
              borderRadius: "2rem",
            }}
            placeholder="Enter a Task"
            value={todoTitle}
            onChange={handleTodoTitleChange}
          ></input>
          <button
            style={{
              marginLeft: "1rem",
              backgroundColor: "#3B8CB7",
              color: "#FFF",
              padding: "0 1rem",
              height: "40px",
              fontSize: "1.5rem",
              borderRadius: "1rem",
            }}
            type="submit"
            onClick={handleAddTodo}
          >
            Submit
          </button>
        </form>
      </div>
      <div
        style={{
          margin: "1rem 5%",
          display: "flex",
          justifyContent: "center",
          alignItems: "stretch",
        }}
      >
        <PendingTaskList
          pendingTodos={pendingTodos}
          handleTodoStatusChange={handleTodoStatusChange}
          handleTodoDelete={handleTodoDelete}
          changeParentTodoTitle={changeParentTodoTitle}
          todoId={todoId}
          setTodoId={setTodoId}
        />
        <CompletedTaskList
          completedTodos={completedTodos}
          handleTodoStatusChange={handleTodoStatusChange}
          handleTodoDelete={handleTodoDelete}
          changeParentTodoTitle={changeParentTodoTitle}
          todoId={todoId}
          setTodoId={setTodoId}
        />
      </div>
    </div>
  );
};

export default MainPage;
