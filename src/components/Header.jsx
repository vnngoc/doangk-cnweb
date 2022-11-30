import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// import { selecauth } from "../redux/authSlice";
function Header() {
  const [user, setUSer] = useState(null);
  return (
    <div style={{width:"100%"}}>
      <nav
        class="navbar navbar-expand-lg bg-light mb-3"
        style={{width:"100%!important",   height: "55px" ,display: "flex"}}
      >
        <div class="container-fluid" style={{display: "flex" , justifyContent: "center", alignItems: "center", lineHeight: "50px"}}>
          <div class="collapse navbar-collapse" id="navbarNav" style={{backgroundColor:"blue",display: "flex" , justifyContent: "center", alignItems: "center", lineHeight: "50px", backgroundColor:"transparent"}}>
            <ul
              class="navbar-nav"
              style={{ display: "flex", alignItems: "center" , backgroundColor:"transparent"}}
            >
              <li class="nav-item">
                <Link to="/" class="nav-link">
                  Home
                </Link>
              </li>
              {user ? (
                <>
                 
                </>
              ) : (
                <>
                  <li class="nav-item" style={{ color: "black" }}>
                    <Link to="/about" class="nav-link" >
                      About Me
                    </Link>
                  </li>
                  
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
