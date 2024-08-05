import React from "react";
import logoImg from '../../assets/images/logo.png'

import './styles.css'

export class Navbar extends React.Component {
    render () {
        return (
            <header>
            <nav id="navbar">
              <div className="nav-brand">
                <img class ="logo"src={logoImg} alt="logo" />
                <h1>Um Titulo Qualquer</h1>
              </div>
                <div>
    
                  <ul className="nav-list">
                    <li><a href="#">Home</a>
                    </li>
    
                    <li><a href="#">Trending</a>
                    </li>
    
                    <li><a href="#">Categories</a>
                    </li>
    
                    <li><a href="#">About Us</a>
                    </li>
    
                  </ul>
                </div>
            </nav>
    
            
          </header>
        )
    }
}



