import React from 'react';

const ToDo = (props) => {

  return(
    <div>
      <h1>{props.todo.username}</h1>
      <p>{props.todo.email}</p>
      <p>{props.todo.text}</p>
    </div>
  );

}

export default ToDo;