import React from "react";
import './Navbar.css';


function Navbar() {
    return (

        <div className="navbar">
            <div className="buttons">
                <div className="searchbar">
                    <input className='text' type="text" placeholder="search..." name="search"></input>
                </div>
                <button className="login">Login</button>
                <button className="signup">Sign Up</button>

            </div>
            <nav className="navigation">
                <div className="cont delicacies"><a href="/">Delicacies</a></div>
                <div className="cont mealplanning"><a href="/">Meal Planning</a></div>
                <div className="cont cooking "><a href="/">Cooking Tips</a></div>
                <div className="cont videos"><a href="/">Videos</a></div>
            </nav>

        </div>
    );
}

export default Navbar;