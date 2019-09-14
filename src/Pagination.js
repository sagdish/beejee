import React, {useContext} from 'react';

import {ToDoContext} from './ToDoContext';
import './App.css';

const Pagination = ({pages}) => {
  const [ todos, setTodos,
    taskCount, setTaskCount,
    currentPage, setCurrentPage
  ] = useContext(ToDoContext);

  const page = []
  for (let i = 0; i < pages; i++) {
    page.push(<button className="Button" key={i} onClick={()=> setCurrentPage(i + 1)}>{i + 1}</button>)
  }
  
  return(
    <>
      {page}
    </>
  )
}

export default Pagination;
