import React, { useState } from 'react';
import { Grid } from '@mui/material';
import ToDoList from './Body';
import Dashboard from './Dashboard';
import axios from 'axios';

function MainApp() {
  const [todos, setTodos] = useState([])

  const handleGetTodos = async () => {
    const getTodos = await axios.get(`https://jsonplaceholder.typicode.com/todos`)
    .then(data =>  setTodos(data.data) )
  }

  return (
    <>
      <Grid container spacing={4} >
        <Grid item xs={12} >
          <Dashboard handleGetTodos={handleGetTodos }/>
        </Grid>
        <Grid item xs={4}>
        {todos && <ToDoList todos={todos} />}
        </Grid>
        </Grid>
    </>
  );
}

export default MainApp;
