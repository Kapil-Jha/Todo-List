import React from 'react'
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    background: '#1976d1',
    color: theme.palette.text.secondary,
  }));

const ToDoList = ({ todos }) => {
    return (
    <Container maxWidth="sm">
        <Stack spacing={2}>
                {todos.map(data => <Link to='/todo' state= {{data:data}}><Item key={data.id}>{ data.title }</Item> </Link> )}
        </Stack>             
    </Container >
    )
}

export default ToDoList;