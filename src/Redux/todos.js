import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getTodo = createAsyncThunk(
    'todo/getTodo',
    async () => {
       return await axios.get(`https://jsonplaceholder.typicode.com/todos`).then(data => { return data.data})
    }
)

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        list: [],
        status: null,   
    },
    extraReducers: {
        [getTodo.pending]: (state, action) =>{ state.status = 'loading'},
        [getTodo.fulfilled]: (state,{ payload }) => {
            state.list = payload
            state.status = 'success'
        },
        [getTodo.rejected]: (state, action) =>{ state.status = 'failed'},
   }
})

export default todoSlice.reducer