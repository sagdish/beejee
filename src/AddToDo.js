import React, { useState, useContext } from 'react';
import axios from 'axios';

import {ToDoContext} from './ToDoContext';

const AddToDo = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');

  const [ todos, setTodos,
    taskCount, setTaskCount,
    currentPage, setCurrentPage,
    toggle, setToggle
  ] = useContext(ToDoContext);

  const updateUser = (e) => {
    setUser(e.target.value);
  }
  const updateEmail = (e) => {
    setEmail(e.target.value);
  }
  const updateText = (e) => {
    setText(e.target.value);
  }

  const addTodo = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("username", user);
    formData.append("email", email);
    formData.append("text", text);
    axios.post('https://uxcandy.com/~shapoval/test-task-backend/v2/create?developer=zach', formData);
    setToggle(!toggle)
    setUser('');
    setEmail('');
    setText('');
  }

  return(
    <form onSubmit={addTodo}>
      <input type="text" name='user' value={user} onChange={updateUser} placeholder="user name" />
      <input type="text" name='email' value={email} onChange={updateEmail} placeholder="email" />
      <input type="text" name='text' value={text} onChange={updateText} placeholder="text"/>
      <button>Add New To Do</button>
    </form>
  );

}

export default AddToDo;
