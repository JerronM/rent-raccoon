import React from 'react'
import './Home.css'
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <p className="home__name">Rent Raccoon</p>
                <img className="home__image"
                src="https://images.pexels.com/photos/545065/pexels-photo-545065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
            <div className="home__row">
                <Product />      
                <Product />          
                <Product />          
            </div>
            <div className="home__row">
                <Product />      
                <Product />          
                <Product />          
            </div>
            <div className="home__row">
                <Product />      
                <Product />          
                <Product />          
            </div>

            </div>
        </div>
    )
}

export default Home
