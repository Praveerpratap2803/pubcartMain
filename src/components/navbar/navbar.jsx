import React from "react";
import { Link } from "react-router-dom";
import "../navbar/navbar"
export default class Navbar extends React.Component{
    render(){
        return(
            <div>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <Link className="nav-link " aria-current="page" to="/">Login</Link>

                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/productlist">ProductList</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/team">Team</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/cart" >Cart</Link>
                    </li>
                    
                </ul>
            </div>
        )
    }
}







