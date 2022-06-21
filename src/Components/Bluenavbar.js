import React from 'react'
import {NavLink} from "react-router-dom";
export default function Bluenavbar() {
  return (
    <>
      <nav class="navbar navbar-expand py-0 ">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <NavLink to="/" class="nav-link" >Home</NavLink>
            </li>
            <li class="nav-item dropdown">
              <NavLink to="/two" class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> About City </NavLink>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li class="dropdown-submenu">< NavLink class="dropdown-item dropdown-toggle"  >Introduction</ NavLink>
                  <ul class="dropdown-menu">
                    <li>< NavLink class="dropdown-item"  >Introduction</ NavLink></li>
                    <li>< NavLink class="dropdown-item"  >City Maps</ NavLink></li>
                    <li>< NavLink class="dropdown-item"  >Public Utility Services</ NavLink></li>
                    <li>< NavLink class="dropdown-item"  >About Us</ NavLink></li>
                  </ul>
                </li>
                <li class="dropdown-submenu">< NavLink class="dropdown-item dropdown-toggle"  >Tourism</ NavLink>
                  <ul class="dropdown-menu">
                    <li>< NavLink class="dropdown-item"  >Tourist Locations</ NavLink></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              < NavLink class="nav-link dropdown-toggle"   id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Information</ NavLink>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li class="dropdown-submenu">< NavLink class="dropdown-item dropdown-toggle"  >Key Documents</ NavLink>
                  <ul class="dropdown-menu">
                    <li>< NavLink class="dropdown-item"  >Government Resolution</ NavLink></li>
                    <li>< NavLink class="dropdown-item"  >Citizen Charter</ NavLink></li>
                    <li>< NavLink class="dropdown-item"  >Notifications/Circulars</ NavLink></li>
                    <li>< NavLink class="dropdown-item"  >Forms</ NavLink></li>
                    <li>< NavLink class="dropdown-item"  >Tenders</ NavLink></li>
                  </ul>
                </li>
                <li class="dropdown-submenu">< NavLink class="dropdown-item dropdown-toggle"  >Acts</ NavLink>
                  <ul class="dropdown-menu">
                    <li>< NavLink class="dropdown-item"  >RTI</ NavLink></li>
                  </ul>
                </li>
                <li>< NavLink class="dropdown-item"  >Help Documents</ NavLink></li>
                <li>< NavLink class="dropdown-item"  >Departments</ NavLink></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              < NavLink class="nav-link dropdown-toggle"   id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Online Services</ NavLink>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li class="dropdown-submenu">< NavLink class="dropdown-item dropdown-toggle"  >Online Payments</ NavLink>
                  <ul class="dropdown-menu">
                    <li>< NavLink class="dropdown-item"  >Water Charges</ NavLink></li>
                    <li>< NavLink class="dropdown-item"  >Sewer Charges</ NavLink></li>
                    <li>< NavLink class="dropdown-item"  >Water Estimation Fee</ NavLink></li>
                    <li>< NavLink class="dropdown-item"  >Sewer Estimation Fee</ NavLink></li>
                  </ul>
                </li>
                <li>< NavLink class="dropdown-item"  >mSeva – Property Tax, Trade License, Complaints and more</ NavLink></li>
                <li>< NavLink class="dropdown-item"  >Apply New Connection</ NavLink></li>
                <li>< NavLink class="dropdown-item"  >How To Apply New Connection</ NavLink></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              < NavLink class="nav-link dropdown-toggle"   id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">News & Events</ NavLink>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li>< NavLink class="dropdown-item"  >News</ NavLink></li>
                <li>< NavLink class="dropdown-item"  >Events</ NavLink></li>
              </ul>
            </li>
            <li class="nav-item">
              < NavLink class="nav-link"  >Gallery</ NavLink>
            </li>
            <li class="nav-item dropdown">
              < NavLink class="nav-link dropdown-toggle"   id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Others</ NavLink>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li>< NavLink class="dropdown-item"  >Recruitment</ NavLink></li>
                <li>< NavLink class="dropdown-item"  >FAQ</ NavLink></li>
                <li>< NavLink class="dropdown-item"  >User Feedback</ NavLink></li>
                <li>< NavLink class="dropdown-item"  >Tender Listing</ NavLink></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
