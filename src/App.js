
import { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Show from './Component/Show';
import Create from './Component/Create';
import Edit from './Component/Edit';
import Delete from './Component/Delete';

function App() {
 
  return (
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/books/create' element={<Create/>}/>

<Route path='/books/detail/:id' element={<Show/>}/>
<Route path='/books/edit/:id' element={<Edit/>}/>
<Route path='/books/delete/:id'  element={<Delete/>}/>

</Routes>

  );
}

export default App;
