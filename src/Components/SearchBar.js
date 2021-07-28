import React from "react"
import "./SearchBar.css"

function SearchBar({placeholder, data}) {
    return (
        <div className="search">
            <div className="searchInputs">
                
                <input type="text" size="50" placeholder="Type a title..."/>
                
                <div className="dataResult">
                    {data.map((value, key) => {
                        return (
                            <p>{value.title}</p>
                        );
                    })}
                </div>
            </div>   
        </div>
    )
}

export default SearchBar