import React, {Component} from "react"
import PropTypes from 'prop-types'
import Articles from "../Articles/Articles.js"
import Menu from "../../../App/Menu/Menu.js"


class ArticlePageDetail extends Component {

    
    render() {
            
        const {
            image,
            title,
            text
            }= this.props;
 
        return (
                <div className="col-md-8">
                <div className="card" styles="width: 30rem;">
                    <img src={image} className="card-img-top" alt="image"/>
                    <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                            <p className="card-text">{text}</p>
                    </div>
                </div> 
                </div>  
                 )
                }
            }

ArticlePageDetail.propTypes = {
id:PropTypes.string.isRequired,
image:PropTypes.string.isRequired,
title:PropTypes.string.isRequired,
subtitle:PropTypes.string.isRequired,
text:PropTypes.string.isRequired,
read:PropTypes.string.isRequired,
}

export default ArticlePageDetail