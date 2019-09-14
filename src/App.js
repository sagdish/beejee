import React from 'react';

import AddToDo from './AddToDo';
import TodoList from './ToDoList';
import { ToDoProvider } from './ToDoContext'

import './App.css';

function App() {
  return (
    <ToDoProvider>
      <div className="App">
        <AddToDo />
        <TodoList />
      </div>
    </ToDoProvider>
  );
}

export default App;
