import React from 'react'
import image1 from "../../../src/Assets/Image1.jpg"
import image2 from "../../../src/Assets/Image2.jpg"
import image3 from "../../../src/Assets/Image3.jpg"
import image4 from "../../../src/Assets/Image4.jfif"
import image5 from "../../../src/Assets/Image5.jfif"
import image6 from "../../../src/Assets/Image6.jpg"
import image7 from "../../../src/Assets/Image7.jfif"
import image8 from "../../../src/Assets/Image8.jfif"


import './Main.css'

const Main = ({}) => 
        { 
            return (
                            <div className="container mx-auto mt-3">
                                <div className="row">
                                    <div className="col-md-5">
                                        <div className="card" styles="width: 30rem;">
                                            <img src={image1} className="card-img-top" alt="image1"/>
                                                <div className="card-body">
                                                    <h5 className="card-title">Dog article 1</h5>
                                                        <h6 className="card-subtitle mb-2 text-muted">Category: Dogs</h6>
                                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                                <a href="#" className="btn mr-2"> Read</a>
                                                                    <a href="#" className="btn"> Rate</a>
                                                </div>
                                        </div> 
                                    </div>   
                                    <div className="col-md-5">
                                        <div className="card" styles="width: 30rem;">
                                        <img src={image2} className="card-img-top" alt="image2"/>
                                            <div className="card-body">
                                                <h5 className="card-title">Castle article 1</h5>
                                                <h6 className="card-subtitle mb-2 text-muted">Category: Castles</h6>
                                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                    <a href="#" className="btn  mr-2">Read</a>
                                                        <a href="#" className="btn">Rate</a>
                                            </div>
                                        </div>
                                    </div> 

                                    <div className="col-md-5">
                                        <div className="card" styles="width: 30rem;">
                                        <img src={image3} className="card-img-top" alt="image3"/>
                                                <div className="card-body">
                                                    <h5 className="card-title">Buidling Article 1</h5>
                                                    <h6 className="card-subtitle mb-2 text-muted">Category: Other</h6>
                                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                    <a href="#" className="btn  mr-2"> Read</a>
                                                    <a href="#" className="btn"> Rate</a>
                                                </div>
                                        </div>       
                                    </div>

                                    <div className="col-md-5">
                                        <div className="card" styles="width: 30rem;">
                                        <img src={image4} className="card-img-top" alt="image3"/>
                                                <div className="card-body">
                                                    <h5 className="card-title">Museum Article 1</h5>
                                                    <h6 className="card-subtitle mb-2 text-muted">Category: Museums</h6>
                                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                    <a href="#" className="btn  mr-2"> Read</a>
                                                    <a href="#" className="btn"> Rate</a>
                                                </div>
                                        </div>       
                                    </div>

                                    <div className="col-md-5">
                                        <div className="card" styles="width: 30rem;">
                                        <img src={image5} className="card-img-top" alt="image3"/>
                                                <div className="card-body">
                                                    <h5 className="card-title">Dogs Article 2</h5>
                                                    <h6 className="card-subtitle mb-2 text-muted">Category: Dogs</h6>
                                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                    <a href="#" className="btn  mr-2"> Read</a>
                                                    <a href="#" className="btn"> Rate</a>
                                                </div>
                                        </div>       
                                    </div>

                                    <div className="col-md-5">
                                        <div className="card" styles="width: 30rem;">
                                        <img src={image6} className="card-img-top" alt="image3"/>
                                                <div className="card-body">
                                                    <h5 className="card-title">Museum Article 2</h5>
                                                    <h6 className="card-subtitle mb-2 text-muted">Category: Museums</h6>
                                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                    <a href="#" className="btn  mr-2"> Read</a>
                                                    <a href="#" className="btn"> Rate</a>
                                                </div>
                                        </div>       
                                    </div>

                                <div className="col-md-5">
                                    <div className="card" styles="width: 30rem;">
                                    <img src={image7} className="card-img-top" alt="image3"/>
                                            <div className="card-body">
                                                <h5 className="card-title">Castle Article 2</h5>
                                                <h6 className="card-subtitle mb-2 text-muted">Category: Castles</h6>
                                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                <a href="#" className="btn  mr-2"> Read</a>
                                                <a href="#" className="btn"> Rate</a>
                                            </div>
                                    </div>       
                                </div>

                                <div className="col-md-5">
                                    <div className="card" styles="width: 30rem;">
                                    <img src={image8} className="card-img-top" alt="image3"/>
                                            <div className="card-body">
                                                <h5 className="card-title">Seaside Article 2</h5>
                                                <h6 className="card-subtitle mb-2 text-muted">Category: Other</h6>
                                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                <a href="#" className="btn  mr-2"> Read</a>
                                                <a href="#" className="btn"> Rate</a>
                                            </div>
                                    </div>       
                                </div>

                                </div>
                            </div>
            )
            }
        
export default Main

