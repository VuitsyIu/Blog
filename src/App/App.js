import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import HomePage from "./Main/AboutMenu/HomePage.js"
  import AboutMenu from "./Main/AboutMenu/AboutMenu.js"
  import TopRated from "./Main/TopRatedMenu/TopRated.js"
  import ArticlePage from "./Main/ArticlePage/ArticlePage.js"
  import SearchBar from "../Components/SearchBar.js"



const App = () => {
        return (
            <Router> 
            <>
        <Route path="/" exact component={HomePage}/>            
        <Route path="/AboutMenu" component={AboutMenu}/>
        <Route path="/TopRated" component={TopRated}/> 
        <Route path="/ArticlePage" component={ArticlePage}/>
            </>
            </Router>
        )
    }


export default App