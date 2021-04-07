import React from 'react'
import ArticleListItem from './ArticleListItem'
import articles from "./Articles"

const ArticleList = () => {
    return (
        <>
            <div className="row">
            <div className="col-md-5">
                    <ArticleListItem
                    subtitle="Castle2"
                    title="Castle"
                    />
            </div>
            <div className="col-md-5">
                    <ArticleListItem
                    subtitle="Castle2"
                    title="Castle"
                    
                    />
            </div>
            <div className="col-md-5">
                    <ArticleListItem
                    subtitle="Castle2"
                    title="Castle"
                    
                    
                    />
            </div>
            <div className="col-md-5">
                    <ArticleListItem
                    subtitle="Mountains"
                    title="Castle"
                    
                    
                    
                    />
            </div>
            </div>
        </>
            )
            }


export default ArticleList