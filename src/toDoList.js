import React, { useState, useContext, Fragment } from 'react';

import {ToDoContext} from './ToDoContext';
import ToDo from './ToDo.js'


const ToDoList = () => {
  console.log(useContext(ToDoContext))
  const [ todos, setTodos, taskCount, setTaskCount, currentPage, setCurrentPage] = useContext(ToDoContext);
  
  const isInt = n => n % 1 === 0;

  const totalPages = isInt(taskCount / 3) ? taskCount / 3 : Math.floor(taskCount / 3) + 1;

  return(
    <div>
      Todos count: {taskCount}
      {todos.map(todo => (
         <Fragment key={todo.id}>
           <ToDo todo={todo} />
         </Fragment>
      ))}
      Current Page: {currentPage}
      <br/>
      {
        currentPage > 1 ? 
        <button onClick={() => setCurrentPage(currentPage - 1)}> previos </button> : 'this is a first page' 
      }
      {
        currentPage * 3 >= taskCount ? 'This is a last page' :
        <button onClick={() => setCurrentPage(currentPage + 1)}> next </button>
      }
      <br/>
      Total pages: {totalPages}
      
    </div>
  );

}

export default ToDoList;