import React from 'react'
import { NavLink } from 'react-router-dom'
import logoAlta from '../assets/img/logo-ALTA.png'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-5 shadow-sm">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img src={logoAlta} alt="logo perusahaan" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <ul className="navbar-nav d-flex align-items-center">
            <li className="nav-item px-2 ">
              <NavLink
                exact
                to="/"
                className="nav-link"
                activeClassName="my-active"
                aria-current="page"
              >
                HOME
              </NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink exact to="/" className="nav-link" aria-current="page">
                ABOUT
              </NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink
                exact
                to="/News"
                className="nav-link"
                activeClassName="my-active"
                aria-current="page"
              >
                NEWS
              </NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink
                exact
                to="/ContactUs"
                className="nav-link contact-us"
                activeClassName="my-active"
                aria-current="page"
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}