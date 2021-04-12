import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Articles from "./Articles.js"

class ArticleListItem extends Component {

    render() {
            
        const {
            image,
            title,
            subtitle,
            text
            }= this.props;

        return (
            <div className="col-md-8">
            <div className="card" styles="width: 30rem;">
                <img src={image} className="card-img-top" alt="image"/>
                <div className="card-body">
                <h5 className="card-title">{title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
                        <p className="card-text">{text}</p>
                            <a href="#" className="btn mr-2">Read</a>
                                <a href="#" className="btn"> Rate</a>
                </div>
            </div> 
        </div>   
        )

    }


}




ArticleListItem.propTypes = {
    id:PropTypes.string.isRequired,
    image:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    subtitle:PropTypes.string.isRequired,
    text:PropTypes.string.isRequired,
    read:PropTypes.string.isRequired,
}

export default ArticleListItem