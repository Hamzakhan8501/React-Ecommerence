import React from 'react';
import { ReactDOM } from 'react';
import './Navbar.css';
import { useNavigate } from "react-router";
import Navbar from './Navbar';
import Product from './products';

export default function Home() {
    return (
        <div>
            <div className="Hero">
                <div className="card text-white bg-dark border-0">
                    <img src="/imges/hero (2).jpg" className="card-img" alt="Background" height="600px" />
                    <div className="card-img-overlay d-flex flex-column justify-content-center">
                        <div className="container">
                            <h5 className="card-title display-3">NEW SEASONS ARRIVASL</h5>
                            <p className="card-text lead fs-2">CHECL OUT ALL THE TRENDS</p>
                        </div>
                    </div>
                </div>
            </div>
            <Product/>
        </div>
    )
}
