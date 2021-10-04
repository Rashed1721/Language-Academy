import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [languages, setLanguages] = useState([]);
    useEffect(() => {
        fetch('./fake1.json')
            .then(res => res.json())
            .then(data => setLanguages(data))
    }, [])
    return (
        <div className="services">
            <h1 className="text-center h1">Our Services</h1>
            <div className="row g-0 container ms-2 mt-5 ">
                <div className="col-sm-6 col-md-8 card-container">

                    {
                        languages.map(language => <Service
                            key={language.Name}
                            language={language}></Service>)
                    }
                </div>
                <div className="col-sm-6  col-md-4 information">

                    <div className="detail">
                        <h4 className=" text-dark">What we Teach</h4>

                        <p>
                            <ul className="ul">
                                <li>English</li>
                                <li>French</li>
                                <li>German</li>
                                <li>Spanish</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;