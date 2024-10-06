import React from 'react';
import { Link } from 'react-router-dom';

export default function Home({ data }) {
  return (
    <div className="container">
      <nav className="navbar">
        <Link to={"/"} className="nav-link">Dashboard</Link>
        <Link to={"/NewEntry"} className="nav-link">Create Entry</Link>
        <Link to={"/Update"} className="nav-link">Update Entry</Link>
        <Link to={"/Remove"} className="nav-link">Remove Entry</Link>
      </nav>
      <h1 className="header">Student Records</h1>
      <table className="student-table">
        <thead>
          <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>City</th>
            <th>Performance</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.city}</td>
              <td>{item.performance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
