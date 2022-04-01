import React from 'react'
import'./Header.css'
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
    return (
        <div className='header'>
            <img 
            className="header_logo"
            src="https://logopond.com/logos/3c86194aed16c20ab2c8727727a82728.png"/>
           
            <div className="header_search">
                <input className="header_searchInput"
                type="text"/>
                <SearchIcon
                className="header_searchIcon"/>
            </div>
            <div className='header_nav'>
                <div className='header_option'>
                    <span className='header_optionLineOne'>Hello Guest</span>
                    <span className='header_optionLineTwo'>Sign In</span>

                </div>

                <div className="header_optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header_optionLineTwo header_basketCount">0</span>
                </div>
            </div>
        </div>
    )
}

export default Header
