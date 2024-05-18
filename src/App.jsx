import React from "react";
import Navbar from './Navbar';
import Content from './Content';
import './App.css';


function App() {
    return (
        <div className="app">
            <Navbar />
            <div className="main-content">
                <div className="side-content">
                    <div className="filters">
                        <h3>FILTERS</h3>
                        <label><input type="checkbox" defaultChecked /> All Recipes</label><br />
                        <label><input type="checkbox" />Breakfast</label><br />
                        <label><input type="checkbox" />Lunch</label><br />
                        <label><input type="checkbox" />Dinner</label><br />
                    </div>
                    <div className="cuisine">
                        <h3>CUISINE</h3>
                        <label><input type="radio" defaultChecked /> Asian</label><br />
                        <label><input type="radio" />Italian</label><br />
                        <label><input type="radio" />Japanese</label><br />
                        <label><input type="radio" />mexican</label><br />
                    </div>
                </div>
                <div className="content">

                    <Content />
                </div>
            </div>
        </div>
    );
}

export default App;
