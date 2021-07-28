import React from 'react'
import Menu from "../../Menu/Menu.js"
import Main from "../../Main/Main.js"
import CarouselBox from '../../Slider/CarouselBox.js'
import SearchBar from "../../../Components/SearchBar.js"
import BookData from "../Articles/Articles.js"

const HomePage = () => 
        { 
            return (
                <>
                <Menu/>
                <CarouselBox/>
                <SearchBar placeholder="Enter a book name..." data={BookData}/>
                <Main/>
                </>
                    )
                    }

export default HomePage