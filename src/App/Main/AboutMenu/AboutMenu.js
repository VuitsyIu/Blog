import React from 'react'
import ImageAbout from "./ImageAbout.jpg"

const AboutMenu = ({}) => 
        { 
            return (
                    <div className="col-md-5">
                        <div className="card" styles="width: 30rem;">
                            <img src={ImageAbout} className="card-img-top" alt="image1"/>
                                <div className="card-body">
                                    <h5 className="card-title">Contacts</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">To contact</h6>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                <a href="#" className="btn mr-2"> Send e-mail</a>
                                                    <a href="#" className="btn"> Join Us in...</a>
                                    </div>
                            </div> 
                    </div> 
                    )
                    }

export default AboutMenu