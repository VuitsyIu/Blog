import React from 'react'

const ArticleCard = ({}) => 
        { 
            return (


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
                    )
                    }

export default ArticleCard