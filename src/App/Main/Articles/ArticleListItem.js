import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import PropTypes from 'prop-types'
import Articles from "./Articles.js"
import {useState} from "react" 


class ArticleListItem extends Component {

    

    render() {
       // const [searchTerm, setSearchTerm] = useState('')

        const {
            id,
            image,
            title,
            subtitle,
            text
            }= this.props;

        return (
           
            //<input type="text" placeholder="Search category..." onChange={event => {setSearchTerm(event.target.value);}}/>
            <div className="col-md-8">
            <div className="card" styles="width: 30rem;">
                <img src={image} className="card-img-top" alt="image"/>
                <div className="card-body">
                <h5 className="card-title">{title}</h5>
                    <h6 className="card-subtitle mb-1 text-muted">{subtitle}</h6>
                        <p className="card-text">{text}</p>
                            <Link to="/ArticlePage">
                                <div className="btn mr-2" 
                          onClick={this.ArticleChange}>Read</div>
                            </Link>
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