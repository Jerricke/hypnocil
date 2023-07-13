import React from "react"

function Header({handleSearch}) {


    return(
        <header>
            <div>
                <img src="./images/hypnocil-logo.png"/>
                <h1>Clinical Trials</h1>
            </div>
            <input id="search" type="text" placeholder="Search..." onChange={(e) => handleSearch(e)}></input>
        </header>
    );
}

export default Header;