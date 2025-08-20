import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer' >
      <div className='footer-content'>
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam blanditiis quod amet facilis dolore unde modi assumenda est. Provident deserunt earum numquam sapiente dolor expedita ex delectus, laboriosam iusto! Repellat.</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91-723-543-6901</li>
            <li>contact@tomato91gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2025 ©️ Tomato.com - All Right Reserved.
        <p className="jitendra">Develop and Design by Jitendra singh Chouhan</p>
      </p>
    </div>
  )
}

export default Footer
