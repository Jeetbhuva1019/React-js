import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Edit from './Components/Edit';
import Delete from './Components/Delete';
import Create from './Components/Create';

export default function App() {

  const [data, setData] = useState([
    { id: 1, name: "Aryan", city: "Ahmedabad", performance: "72" },
    { id: 2, name: "Soman", city: "Rajkot", performance: "89" },
  ]);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home data={data} />} />
          <Route path='/Update' element={<Edit data={data} setData={setData} />} />
          <Route path='/Remove' element={<Delete data={data} setData={setData} />} />
          <Route path='/NewEntry' element={<Create data={data} setData={setData} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
