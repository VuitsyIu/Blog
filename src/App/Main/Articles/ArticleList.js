import React from 'react'
import ArticleListItem from './ArticleListItem'
import articles from "./Articles"

const ArticleList = () => {
    return (
        <>
            <div className="row">
                    {
                            articles.map(({
                                image,
                                subtitle,
                                title,
                                text    
                            })=>(
                                <div className="col-md-8"> 
                        <ArticleListItem
                    image={image}
                    subtitle={subtitle}
                    title={title}
                    text={text}
                    />
                                </div>          
                            ))
                            }
            </div>
        </>
            )
            }


export default ArticleList