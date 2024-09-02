import React from 'react';
import './Navbar.css';

const Navbar = () => (
  <nav>
    <img
      style={{ marginTop: '30px', marginLeft: '75px' }}
      src="https://preview.colorlib.com/theme/essence/img/core-img/logo.png"
      alt=""
    />
    <a href="#">Shop<i style={{ color: 'gray', fontSize: '13px', marginLeft: '3px' }} className="fa-solid fa-chevron-down"></i></a>
    <a href="#">Pages<i style={{ color: 'gray', fontSize: '13px', marginLeft: '3px' }} className="fa-solid fa-chevron-down"></i></a>
    <a href="#">Blog</a>
    <a href="#">Contact</a>
    <i id="a" className="fa-solid fa-bag-shopping"></i>
    <i id="a" className="fa-regular fa-user"></i>
    <i id="a" className="fa-regular fa-heart"></i>
    <input type="text" placeholder="Type for search" />
    <i id="b" className="fa-solid fa-magnifying-glass"></i>
  </nav>
);

export default Navbar;
