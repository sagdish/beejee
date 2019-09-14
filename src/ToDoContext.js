import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';

async function getToDos(page) {
  try{
    const response = await axios.get(`https://uxcandy.com/~shapoval/test-task-backend/v2?developer=zach&page=${page}`);
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
  const [tasks, setTasks] = useState('');


  useEffect(()=> {
    getToDos(currentPage)
      .then(response => {
        setTasks(response.data.message.total_task_count)
        return response.data.message.tasks.map(todo => {
          const { username, email, text, id, status } = todo;
          return { username, email, text, id, status }
        })
      })
      .then(todos => {
        setToDos(todos);
        // console.log(todos);
      })
      .catch(err => console.log('error in effect hook: ', err));
  }, []);

  return (
    <ToDoContext.Provider value={[toDos, setToDos, tasks]}>
      {props.children}
    </ToDoContext.Provider>
  );

}


// {
//   username: 'bob',
//   id: 1,
//   text: 'some text',
//   email: 'email@email.com'
// },
// {
//   username: 'marley',
//   id: 2,
//   text: 'some text',
//   email: 'email@email.com'
// }