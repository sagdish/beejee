import React, { useState, useContext, Fragment } from 'react';

import {ToDoContext} from './ToDoContext';
import ToDo from './ToDo.js'


const ToDoList = () => {
  const [ todos, setTodos, tasks ] = useContext(ToDoContext);


  return(
    <div>
      Todos count: {tasks}
      {todos.map(todo => (
         <Fragment key={todo.id}>
           <ToDo todo={todo} />
         </Fragment> 
      ))}
    </div>
  );

}

export default ToDoList;