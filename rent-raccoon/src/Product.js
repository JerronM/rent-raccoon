import React from 'react'
import './Product.css'


function Product() {
    return (
        <div className="product">
            <div className="product_info">
                <p>Title Here</p>
                <p className="product__price">
                   $50 per hour
                </p>
            </div>
                <img src="https://theoutdoortoycentre.co.uk/wp-content/uploads/2015/09/15-x-15-clown-a3.jpg"
                alt=""
                />
                <button>Rent Now</button>
            </div>
    );
}

export default Product
