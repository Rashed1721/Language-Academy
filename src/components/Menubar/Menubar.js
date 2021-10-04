import React from 'react';
import { Link } from 'react-router-dom';
import './Menubar.css'

const Menubar = () => {
    return (
        < div>
            < nav class="navbar navbar-expand-lg navbar-light  mt-3" >
                <div class="container-fluid">

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class=" navbar-nav">
                            <Link to="/home" className="items">
                                <li>Home</li>
                            </Link>
                            <Link to="/service" className="items">
                                <li>Service</li>
                            </Link>
                            <Link to="/about" className="items">
                                <li>About us</li>
                            </Link>
                            <Link to="/contact" className="items">
                                <li>Contact us</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav >

        </div >

    );
};

export default Menubar;