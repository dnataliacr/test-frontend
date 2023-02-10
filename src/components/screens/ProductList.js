import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from "axios";

const ProductList = ({ }) => {
    const [products, setProducts] = useState([])
    const [category, setCategory] = useState([])
    let [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('search')
    return (<div className='container product-list-container'>
    </div>
    )
}

export default ProductList