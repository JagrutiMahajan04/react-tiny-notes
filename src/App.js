import  React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import AddNote from './views/AddNote/AddNote';
import Home from './views/Home/Home';

import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
       <Route path="/" element={<Home/>}></Route>
      <Route path="/add-note" element={<AddNote/>}></Route>

      </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
