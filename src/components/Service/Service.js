import React from 'react';

const Service = (props) => {
    const { Language, img, price, rating, vote, Duration } = props.language;
    return (
        <div className="">
            <div className="row   ">
                <div className="col  ">
                    <div className="card h-100 w-75 " >
                        <img width="100%" height="150px" src={img} className="card-img-top " alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{Language}</h5>
                            <h6>{Duration}</h6>
                            <h3>${price}</h3>
                            <h6>Rating:{rating}({vote})</h6>

                        </div>
                    </div>
                </div>



            </div>

        </div>
    );
};

export default Service;