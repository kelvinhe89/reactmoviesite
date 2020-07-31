import React from 'react';
import { Link } from 'react-router-dom';

 const Navbar = ()=>{
    return(
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-logo">Movie</Link>
                    
                    <ul className="right">
                        
                    </ul>
                </div>
            </nav>  
    )
}

export default Navbar;