import React, { useState, useContext } from 'react';

import {ToDoContext} from './ToDoContext';
import ToDo from './ToDo.js';
import Pagination from './Pagination';
import './App.css';

const ToDoList = () => {
  console.log(useContext(ToDoContext))
  const [ todos, setTodos,
    taskCount, setTaskCount,
    currentPage, setCurrentPage,
    toggle, setToggle,
    sort, setSort,
    direction, setDirection,
    loading, setLoading
  ] = useContext(ToDoContext);
  
  const isInt = n => n % 1 === 0;

  const totalPages = isInt(taskCount / 3) ? taskCount / 3 : Math.floor(taskCount / 3) + 1;

  return(
    <div>
      {loading ? <div className="Tasks">Loading ... </div> :
        <>
        <p>Todos count: {taskCount}</p>
        <div className="Tasks">
          {todos.map(todo => (
            <div key={todo.id}>
              <ToDo todo={todo} />
            </div>
          ))}
        </div>
        <br/>

        <div>
          <div>sort by: 
            <button className="Button" onClick={() => setSort('username')}>username</button>
            <button className="Button" onClick={() => setSort('id')}>ID</button>
            <button className="Button" onClick={() => setSort('email')}>email</button>
            <button className="Button" onClick={() => setSort('status')}>completed</button>
            <button className="Button" onClick={() => direction === "asc" ? setDirection('desc') : setDirection('asc')}>
              {direction === "asc" ? "Descending" : "Ascending"}</button>
          </div>

          <div style={{margin: 10}}>
            Current Page: {currentPage}
            <br/>
            Total pages: {totalPages}
            <br/>
            Go to Page:
            <Pagination pages={totalPages} />
          </div>
        </div>

          {
            currentPage > 1 ? 
            <button className="Button" onClick={() => setCurrentPage(currentPage - 1)}> previos </button> : null
          }
          {
            currentPage * 3 >= taskCount ? null :
            <button className="Button" onClick={() => setCurrentPage(currentPage + 1)}> next </button>
          }
        </>
      }
    </div>
  );

}

export default ToDoList;