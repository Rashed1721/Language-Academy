import React from 'react';
import pic from '../../image/pic1.jpg'
import './About.css'

const About = () => {
    return (
        <div className="about d-flex justify-content-around align-item-center ">
            <div className="text">
                <div className="mt-5">
                    <h1>Who We Are</h1>
                    <p className="para">
                        Our purpose is to establish common understanding and implementation of effective instructional practices. This website has been created by and for our Students. We encourage Our Students to use their inherent creativity, even as we urge adherence to specific content area guidelines at each level student.</p>
                </div>

                <div className="mt-5">
                    <button className="btn bg ">Join Us</button>
                </div>
            </div>
            <div className="img">
                <div>
                    <img className="" width="100%" height="400pxs" src={pic} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;