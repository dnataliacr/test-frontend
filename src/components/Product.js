import React from "react"
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    let navigate = useNavigate();

    return (<div className='product-container'>
        <div className="product-wrapper" onClick={() => navigate(`/items/${product?.id}`)}>
            <div
                className="product-picture">
                <img src={product?.picture} alt="product image" />
            </div>
            <div className="product-content">
                <span> $ {product?.price?.amount}</span>
                <h2>{product?.title}</h2>
            </div>
        </div>
        <div className="product-location">
            <span>{product?.location}</span>
        </div>

    </div>)
}

export default Product