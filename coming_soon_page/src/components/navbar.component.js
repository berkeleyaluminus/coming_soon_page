import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Navbar extends React.Component{
    render() {
        return (
            <nav>
                <ul class="nav-links" id="nav">
                    <li><a class="nav-link" href="#">About Us</a></li>
                    <li><a class="nav-link" href="#">Product</a></li>
                    <li><a class="nav-link" href="#">Partners</a></li>
                </ul>
            </nav>
        );
    }
}
