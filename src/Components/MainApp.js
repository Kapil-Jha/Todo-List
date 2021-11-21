import React, { useState } from 'react';
import { Grid } from '@mui/material';
import ToDoList from './Body';
import axios from 'axios';
import Button from '@mui/material/Button';

function MainApp() {
  const [todos, setTodos] = useState([])

  // const handleGetTodos = async () => {
  //   const getTodos = await axios.get(`https://jsonplaceholder.typicode.com/todos`)
  //   .then(data =>  setTodos(data.data) )
  // }

  return (
    <>
      <Grid container direction="row" justifyContent="center" alignItems="flex-start" >
        <Grid item direction="row" justifyContent="center" alignItems="center" xs={12} >
        {/* <Button variant="contained" onClick={handleGetTodos}> Get ToDo's </Button> */}
        </Grid>
        <Grid item xs={12}>
        {todos && <ToDoList todos={todos} />}
        </Grid>
        </Grid>
    </>
  );
}

export default MainApp;
