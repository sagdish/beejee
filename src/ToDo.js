import React from 'react';

const ToDo = (props) => {

  return(
    <div>
      <h3>Name: {props.todo.username}</h3>
      <p>email address: {props.todo.email}</p>
      <p>task: {props.todo.text}</p>
    </div>
  );

}

export default ToDo;