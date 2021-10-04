import React from 'react';
import Menubar from '../Menubar/Menubar';

import './Banner.css'

const Banner = () => {
    return (
        <div className="banner" >
            <div className=' row '>
                <Menubar></Menubar>

            </div>

            <div className="text-start ms-5 mt-5 text-white">
                <h1 >Khan Language</h1>
                <h2>Academy</h2>
            </div>


        </div>
    );
};

export default Banner;