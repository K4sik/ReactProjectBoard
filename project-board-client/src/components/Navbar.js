import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    Project Task Tool
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="navbar-collapse collapse right">
                    <ul className="nav navbar-nav navbar-right"></ul>
                </div>
                <div className="navbar-collapse collapse" id="navbarSupportedContent" style={{'marginLeft': '40%', color: 'gray'}}>
                    <ul className="navbar-nav mr-auto" >
                        <li className="nav-item active">
                            <Link to="/" className="nav-link" >HOME</Link>
                        </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Project Board</Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link to="support" className="nav-link">Support</Link>
                            </li>
                        <button className="navButton btn btn-link btn-sm" id="LogIn" type="submit">
                            <Link to="logIn" style={{color: 'white'}}>LOGIN</Link>
                        </button>
                        <button className="navButton btn btn-link btn-sm" id="Register" type="submit">
                            <Link to="register" style={{color: 'white'}}>REGISTRATION</Link>
                        </button>
                    </ul>
                </div>



            </div>
        </nav>
    )
}
