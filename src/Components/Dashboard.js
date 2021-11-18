import React from 'react'
import Button from '@mui/material/Button';


const Dashboard = ({ handleGetTodos }) => {
    return (
        <div>
            <Button variant="contained" onClick={handleGetTodos}> Get ToDo's </Button>
        </div>
    )
}

export default Dashboard