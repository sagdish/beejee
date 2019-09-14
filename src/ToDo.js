import React from 'react';

import './App.css'

const ToDo = (props) => {

  return(
    <div className="Task">
      <h3>Name: {props.todo.username}</h3>
      <p>email address: {props.todo.email}</p>
      <input type="checkbox" checked={false} style={{"display": 'inline-block'}} />
      <p style={{"display": 'inline-block'}}>task: {props.todo.text}</p>
    </div>
  );

}

export default ToDo;