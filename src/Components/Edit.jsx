import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Edit({ data, setData }) {
  const navigation = useNavigate();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [performance, setPerformance] = useState("");

  const handleGetData = () => {
    const Obj = data.find((item) => item.id === JSON.parse(id));

    if (Obj) {
      setName(Obj.name);
      setCity(Obj.city);
      setPerformance(Obj.performance);
    } else {
      alert("Data Not Found");
    }
  };

  const handleEditData = () => {
    let newData = data.map((item) => {
      if (item.id === Number(id)) {
        return { ...item, name, city, performance };
      } else {
        return item;
      }
    });

    setData(newData);
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
      <h1 className="header">Update Student Info</h1>
      <form className="form">
        <label>Roll No</label>
        <div className="input-group">
          <input type="text" className="form-input" placeholder="Enter Roll No" onChange={(e) => setId(e.target.value)} />
          <button onClick={handleGetData} className="btn btn-secondary" type="button">Get</button>
        </div>
        <label>Name</label>
        <input type="text" value={name} className="form-input" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />
        <label>City</label>
        <input type="text" value={city} className="form-input" placeholder="Enter City" onChange={(e) => setCity(e.target.value)} />
        <label>Performance</label>
        <input type="text" value={performance} className="form-input" placeholder="Enter Performance" onChange={(e) => setPerformance(e.target.value)} />
        <button onClick={handleEditData} className="btn">Update Info</button>
      </form>
    </div>
  );
}
