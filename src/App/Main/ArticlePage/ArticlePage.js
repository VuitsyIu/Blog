import React, {Component} from "react"
import PropTypes from 'prop-types'
import Articles from "../Articles/Articles.js"
import Menu from "../../../App/Menu/Menu.js"
import ArticlePageDetail from "./ArticlePageDetail.js"
import { propTypes } from "react-bootstrap/esm/Image"

class ArticlePage extends Component {

    

    render() {
            

        return (
            <>
            <Menu/>
            <ArticlePageDetail/>
            </>

        
        )
    }
}

ArticlePage.propTypes = {
    id:PropTypes.string.isRequired,
    image:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    subtitle:PropTypes.string.isRequired,
    text:PropTypes.string.isRequired,
    read:PropTypes.string.isRequired,
}

export default ArticlePage