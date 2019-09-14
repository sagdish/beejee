import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';

async function getToDos(page, sort, direction) {
  try{
    const response = await axios.get(`https://uxcandy.com/~shapoval/test-task-backend/v2?developer=zach&sort_field=${sort}&sort_direction=${direction}&page=${page}`);
    console.log(response);
    return response;
  }
  catch(err) {
    return console.error({ getRequestError: err })
  }
}

export const ToDoContext = createContext();

export const ToDoProvider = props => {
  const [toDos, setToDos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [taskCount, setTaskCount] = useState('');
  const [toggle, setToggle] = useState(true);
  const [sort, setSort] = useState('id');
  const [direction, setDirection] = useState('asc');
  const [loading, setLoading] = useState(true);


  useEffect(()=> {
    getToDos(currentPage, sort, direction)
      .then(response => {
        setTaskCount(response.data.message.total_task_count)
        return response.data.message.tasks.map(todo => {
          const { username, email, text, id, status } = todo;
          return { username, email, text, id, status }
        })
      })
      .then(todos => {
        setToDos(todos);
        setLoading(false);
      })
      .catch(err => console.log('error in effect hook: ', err));
  }, [currentPage, toggle, sort, direction]);

  return (
    <ToDoContext.Provider value={[
      toDos, setToDos,
      taskCount, setTaskCount,
      currentPage, setCurrentPage,
      toggle, setToggle,
      sort, setSort,
      direction, setDirection,
      loading, setLoading
    ]}>
      {props.children}
    </ToDoContext.Provider>
  );

}
