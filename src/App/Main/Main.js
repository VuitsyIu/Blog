import React from 'react'
import './Main.css'
import ArticleList from "./Articles/ArticleList.js"



const Main = () => {
    return (
         <div className="container mx-auto mt-3">
            <div className="row">
                <ArticleList/>     
            </div>
        </div>
            )
        }
        
        export default Main

