import React from 'react'
import useClock from '../hooks/useClock'
import { NavLink } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

import model from '../assets/img/matthew-hamilton-tNCH0sKSZbA-unsplash (1).jpg'
import '../assets/css/Home.css'


export default function Home() {
  const timestamp = useClock()
  return (
    <div id="my-content">
      <Navbar />

      <div className="header-body d-flex justify-content-center ">
        <div className="container mt-1">
          <div className="row mb-5">
            <p className="timestamp">{timestamp}</p>
          </div>
          <div className="row">
            <div className="col-md-5 ">
              <img className="my-img" src={model} alt="profile-pic" />
            </div>
            <div className="col-md-7">
              <h6 className="deskripsi">Hi, my name is</h6>
              <h1 className="deskripsi">Anne Sullivian</h1>
              <h4 className="deskripsi">I Build things for the web</h4>
              <div className="container-my-button">
                <NavLink to="/ContactUs">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg btn-getInTouch"
                  >
                    Get In Touch
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}