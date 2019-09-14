import React from 'react';

import './App.css'

const ToDo = (props) => {

  return(
    <div className="Task">
      <h2><span style={{fontStyle: "italic"}}>name: </span>{props.todo.username}</h2>
      <p>email address: {props.todo.email}</p>
      {/* <input type="checkbox" checked={false} style={{"display": 'inline-block'}} /> */}
      <p><span style={{fontStyle: "italic"}}>task: </span> <span style={props.todo.status? {textDecoration: "line-through"} : null} >{props.todo.text}</span></p>
    </div>
  );

}

export default ToDo;