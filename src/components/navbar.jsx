import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {    
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                ReactJS
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">
                            Home
                        </NavLink>
                    </li>  
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/movies">
                            Movies
                        </NavLink>
                    </li> 
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/products">
                            Products
                        </NavLink>
                    </li> 
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/posts/2018/05">
                            Posts
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/login">
                            Login
                        </NavLink>
                    </li> 
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/register">
                            Register
                        </NavLink>
                    </li>  
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/customers">
                            Customers
                        </NavLink>
                    </li> 
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/rentals">
                            Rentals
                        </NavLink>
                    </li> 
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/admin">
                            Admin
                        </NavLink>
                    </li>                 
                </ul>
            </div>
            </nav>

     );
}
 
export default NavBar;