import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

import imgDot from '../assets/img/img.dot.png'
import '../assets/css/ReviewMessage.css'


export default function ReviewMessage() {
  const contact = useSelector((state) => state.contact)

  return (
    <>
      <header></header>
      <div className="box-absolute">
        <div className="content">
          <div className="form">
            <div className="field">
              <div className="v1">Fullname</div>
              <div className="v2">:</div>
              <div className="v3">{contact.fullname.value}</div>
            </div>
            <div className="field">
              <div className="v1">Email Address</div>
              <div className="v2">:</div>
              <div className="v3">{contact.email.value}</div>
            </div>
            <div className="field">
              <div className="v1">Phone Number</div>
              <div className="v2">:</div>
              <div className="v3">{contact.phone.value}</div>
            </div>
            <div className="field">
              <div className="v1">Nationality</div>
              <div className="v2">:</div>
              <div className="v3">{contact.nationality.value}</div>
            </div>
          </div>

          <p>{contact.message.value}</p>

          <hr />

          <h4 className="first-h4">Thanks for contacting us!</h4>
          <h4>We will be in touch with you shortly.</h4>

          <div className="container-my-button">
            <NavLink to="/">
              <button
                type="button"
                className="btn btn-primary btn-lg btn-getInTouch"
              >
                Home
              </button>
            </NavLink>
          </div>

          <img className="content-graphic" src={imgDot} alt="" />
        </div>
      </div>
      <footer></footer>
    </>
  )
}