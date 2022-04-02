import React from 'react'
import './Product.css'
import { useStateValue } from "./StateProvider"



function Product({id, title, image, price}) {
    const [{ basket }, dispatch] = useStateValue();
    console.log("The basket >>>", basket)
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
            },
        });
    };
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <strong><p>${price} per hour</p></strong>
                </p>
            </div>
                <img src={image}
                />
                <button onClick={addToBasket}>Rent Now</button>
            </div>
    );
}

export default Product;
