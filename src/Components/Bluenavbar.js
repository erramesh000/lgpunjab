import React from 'react'

export default function Bluenavbar() {
  return (
    <div>
    <nav class="navbar navbar-expand-md py-0 ">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> About City </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#">Introduction</a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Introduction</a></li>
                  <li><a class="dropdown-item" href="#">City Maps</a></li>
                  <li><a class="dropdown-item" href="#">Public Utility Services</a></li>
                  <li><a class="dropdown-item" href="#">About Us</a></li>
                </ul>
              </li>
              <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#">Tourism</a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Tourist Locations</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Information</a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#">Key Documents</a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Government Resolution</a></li>
                  <li><a class="dropdown-item" href="#">Citizen Charter</a></li>
                  <li><a class="dropdown-item" href="#">Notifications/Circulars</a></li>
                  <li><a class="dropdown-item" href="#">Forms</a></li>
                  <li><a class="dropdown-item" href="#">Tenders</a></li>
                </ul>
              </li>
              <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#">Acts</a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">RTI</a></li>
                </ul>
              </li>
              <li><a class="dropdown-item" href="#">Help Documents</a></li>
              <li><a class="dropdown-item" href="#">Departments</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Online Services</a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#">Online Payments</a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Water Charges</a></li>
                  <li><a class="dropdown-item" href="#">Sewer Charges</a></li>
                  <li><a class="dropdown-item" href="#">Water Estimation Fee</a></li>
                  <li><a class="dropdown-item" href="#">Sewer Estimation Fee</a></li>
                </ul>
              </li>
              <li><a class="dropdown-item" href="#">mSeva – Property Tax, Trade License, Complaints and more</a></li>
              <li><a class="dropdown-item" href="#">Apply New Connection</a></li>
              <li><a class="dropdown-item" href="#">How To Apply New Connection</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">News & Events</a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" href="#">News</a></li>
              <li><a class="dropdown-item" href="#">Events</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Gallery</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Others</a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" href="#">Recruitment</a></li>
              <li><a class="dropdown-item" href="#">FAQ</a></li>
              <li><a class="dropdown-item" href="#">User Feedback</a></li>
              <li><a class="dropdown-item" href="#">Tender Listing</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  )
}
