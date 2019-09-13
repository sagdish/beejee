import React, { useState, createContext, useEffect } from 'react';

async function getToDos() {
  
}

export const ToDoContext = createContext();

export const ToDoProvider = (props) => {
  const [toDos, settoDos] = useState([]);

}