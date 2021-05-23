import React from 'react'
import ImageAbout from "./ImageAbout.jpg"

const AboutMenuContent = () => 
        { 
            return (
                <div className="col-md-5">
                        <div className="card" styles="width: 30rem;">
                            <img src={ImageAbout} className="card-img-top" alt="image1"/>
                                <div className="card-body">
                                    <h5 className="card-title">About US</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">Our misson: to populate cool and interesting articles over the world</h6>
                                            <p className="card-text">To be a part of our organisation You may contact us via e-mail with proposed article. 
                                            All requests are processed within 5 working days. We have pages in facebook and instagram. Follow us where it`s comfortable.</p>
                                                <a href="#" className="btn mr-2"> Send e-mail</a>
                                                    <a href="#" className="btn"> Join Us in...</a>
                                    </div>
                            </div> 
                    </div>
                    )
                    }

export default AboutMenuContent