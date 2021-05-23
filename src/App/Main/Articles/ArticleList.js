import React from 'react'
import ArticleListItem from './ArticleListItem'
import articles from "./Articles"

const ArticleList = () => {
    return (
            <>
        <li><a className="menu__item">
                      <div className="menu__item">Choose category</div>
                        <select
                          // id="category"
                          // name="category"
                          // value={category}
                          // onChange={handleChange}
                          >
                          <option>all</option>
                          <option>Dogs</option>
                          <option>Museums</option>
                          <option>Other</option>
                          <option>Castles</option>

                        </select>
              </a></li>


        
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