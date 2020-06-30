import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Navbar extends React.Component{
    render() {
        return (
            <nav>
                <ul class="nav-links" id="nav">
                    <li><a class="nav-link" href="#aboutus">About Us</a></li>
                    <li><a class="nav-link" href="#product" >Product</a></li>
                    <li><a class="nav-link" href="#partners">Partners</a></li>
                </ul>
            </nav>
        );
    }
}
