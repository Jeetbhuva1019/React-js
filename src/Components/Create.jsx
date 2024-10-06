import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Create({ data, setData }) {

  const navigation = useNavigate();
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [performance, setPerformance] = useState("");

  const handleCreate = () => {
    const Obj = { id: data.length + 1, name: name, city: city, performance: performance };
    setData([...data, Obj]);
    navigation("/");
  };

  return (
    <div className="container">
      <nav className="navbar">
        <Link to={"/"} className="nav-link">Dashboard</Link>
        <Link to={"/NewEntry"} className="nav-link">Create Entry</Link>
        <Link to={"/Update"} className="nav-link">Update Entry</Link>
        <Link to={"/Remove"} className="nav-link">Remove Entry</Link>
      </nav>
      <h1 className="header">Create New Record</h1>
      <form className="form">
        <label>Name</label>
        <input type="text" className="form-input" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />
        <label>City</label>
        <input type="text" className="form-input" placeholder="Enter City" onChange={(e) => setCity(e.target.value)} />
        <label>Performance</label>
        <input type="text" className="form-input" placeholder="Enter Performance" onChange={(e) => setPerformance(e.target.value)} />
        <button className="btn" onClick={handleCreate}>Save Record</button>
      </form>
    </div>
  );
}
