import React, { useState, useContext } from 'react';
import axios from 'axios';

import {ToDoContext} from './ToDoContext';
import './App.css'

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
    if (user.length > 2 && email.includes('@') && text.length > 3) {
      formData.append("username", user);
      formData.append("email", email);
      formData.append("text", text);
      axios.post('https://uxcandy.com/~shapoval/test-task-backend/v2/create?developer=zach', formData);
      setToggle(!toggle)
      setUser('');
      setEmail('');
      setText('');
      alert("new task was created");
    } else {
      alert("Please enter valid credentials")
    }
  }

  return(
    <form onSubmit={addTodo} className="Form">
      <input type="text" name='user' value={user} onChange={updateUser} placeholder="user name" />
      <input type="text" name='email' value={email} onChange={updateEmail} placeholder="email" />
      <input type="text" name='text' value={text} onChange={updateText} placeholder="text"/>
      <button>Add New To Do</button>
    </form>
  );

}

export default AddToDo;
