import React from 'react';
// import './Footer.css'; 

const Footer = () => (
    <footer>
        <ul className="u1">
            <img src="https://preview.colorlib.com/theme/essence/img/core-img/logo2.png" alt="" />
            <a style={{ marginLeft: '50px' }} href="#">Shop</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
            <p>SUBSCRIBE</p>
            <input type="email" placeholder="Your email here →" />
        </ul>
        <ul className="u2">
            <a href="#">Order Status</a><br /><br />
            <a href="#">Shipping and Delivery</a><br /><br />
            <a href="#">Privacy Policy</a>
        </ul>
        <ul className="u3">
            <a href="#">Payment Options</a><br /><br />
            <a href="#">Guides</a><br /><br />
            <a style={{ marginLeft: '1090px', position: 'relative', top: '-125px' }} href="#">Terms of Use</a>
        </ul>
        <ul className="u4">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-pinterest"></i>
            <i className="fa-brands fa-youtube"></i>
        </ul>
        <p>Copyright ©2023 All rights reserved | This template is made with by <b style={{ fontWeight: 'lighter', color: 'black' }}>Colorlib</b></p>
    </footer>
);

export default Footer;
