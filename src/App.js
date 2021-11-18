import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import MainApp from './Components/MainApp';
import Card from './Components/Card'

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<MainApp /> }/>
      <Route path='/todo' element={<Card/>} />
     </Routes>
  );
}

export default App;
