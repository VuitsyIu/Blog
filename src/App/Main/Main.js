import React from 'react'
import image1 from "../../../src/Assets/Image1.jpg"
import image2 from "../../../src/Assets/Image2.jpg"
import image3 from "../../../src/Assets/Image3.jpg"
import image4 from "../../../src/Assets/Image4.jfif"

import './Main.css'

const Main = ({}) => 
        { 
            return (
                            <div className="container mx-auto mt-6">
                                <div className="row">
                                    <div className="col-md-5">
                                        <div className="card" styles="width: 30rem;">
                                            <img src={image1} className="card-img-top" alt="image1"/>
                                                <div className="card-body">
                                                    <h5 className="card-title">Theme: Dogs</h5>
                                                        <h6 className="card-subtitle mb-2 text-muted">Dogs</h6>
                                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                                <a href="#" className="btn mr-2"> See the list</a>
                                                                    <a href="#" className="btn"> Popular</a>
                                                </div>
                                        </div> 
                                    </div>   
                                    <div className="col-md-5">
                                        <div className="card" styles="width: 30rem;">
                                        <img src={image2} className="card-img-top" alt="image2"/>
                                            <div className="card-body">
                                                <h5 className="card-title">Theme: Castles</h5>
                                                <h6 className="card-subtitle mb-2 text-muted">Castle</h6>
                                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                    <a href="#" className="btn  mr-2">See the list</a>
                                                        <a href="#" className="btn"> Popular</a>
                                            </div>
                                        </div>
                                    </div>    
                                <div className="col-md-5">
                                    <div className="card" styles="width: 30rem;">
                                    <img src={image3} className="card-img-top" alt="image3"/>
                                            <div className="card-body">
                                                <h5 className="card-title">Theme: Other</h5>
                                                <h6 className="card-subtitle mb-2 text-muted">Castle</h6>
                                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                <a href="#" className="btn  mr-2"> See the list</a>
                                                <a href="#" className="btn"> Popular</a>
                                            </div>
                                    </div>       
                                </div>

                                <div className="col-md-5">
                                    <div className="card" styles="width: 30rem;">
                                    <img src={image4} className="card-img-top" alt="image3"/>
                                            <div className="card-body">
                                                <h5 className="card-title">Theme: Museum</h5>
                                                <h6 className="card-subtitle mb-2 text-muted">Museums</h6>
                                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                <a href="#" className="btn  mr-2"> See the list</a>
                                                <a href="#" className="btn"> Popular</a>
                                            </div>
                                    </div>       
                                </div>
                                </div>
                            </div>
            )
            }
        
export default Main

