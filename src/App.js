import React from 'react';

import AddToDo from './AddToDo';
import TodoList from './ToDoList';
import { ToDoProvider } from './ToDoContext'

import './App.css';

function App() {
  return (
    <ToDoProvider>
      <div className="App">
        <h1>To Do App</h1>
        <p>created using React with Hooks and Contex Api</p>
        <AddToDo />
        <TodoList />
      </div>
    </ToDoProvider>
  );
}

export default App;
