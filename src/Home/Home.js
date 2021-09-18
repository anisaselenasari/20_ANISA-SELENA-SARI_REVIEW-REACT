import React from 'react'
import 

function Home() {
  return (
    <div>
    <body>
      <div class="container-fluid px-0">
          <header class="navbar fixed-top shadow-lg d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 border-bottom">
            <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
              <img class="logo" src="assets/img/logo-ALTA (1).png" alt="">
            </a>
            <label class="hamburger" for="hamburger">&#9776;</label>
            <input type="checkbox" id="hamburger"/>    
            <ul id="items" class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
              <li><a href="#" class="nav-link px-3 link-home">HOME</a></li>
              <li><a href="#" class="nav-link px-3 link-dark">ABOUT</a></li>
              <li><a href="#" class="nav-link px-3 link-dark">EXPERIENCES</a></li>
              <li><a href="contact_us.html" class="nav-link px-3 link-dark">CONTACT</a></li>
            </ul>
          </header>
          <div class="jumbotron">
            <div class="row">
              <div class="col-lg-5 col-12">
                <img class="profile" src="assets/img/matthew-hamilton-tNCH0sKSZbA-unsplash (1).jpg" alt="">
              </div>
              <div class="col-lg-7 col-12 profile-text">
                <h4>Hi, my name is</h4>
                <h1>Anne Sullivan</h1>
                <h3>I build things for the web</h3>
                <a href="contact_us.html" role="button" class="btn">Get In Touch</a>
              </div>
            </div>
          </div>
      </div>
      
  </body>
    </div>
  )
}

export default Home

