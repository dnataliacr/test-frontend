import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Product from '../Product';
import Breadcrumb from '../Breadcrumb'
import axios from "axios";


const ProductList = () => {
    const [products, setProducts] = useState([])
    const [category, setCategory] = useState([])
    const [loading, setLoading] = useState(true)
    let [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('search')

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`http://localhost:8000/api/items?q=${query}`)
            const productsFirstItems = response?.data?.items.slice(0, 4)

            setProducts(productsFirstItems)
            setCategory(response?.data?.categories)
            setLoading(false)
        };

        fetchData();
    }, [query])

    return (<div className='container product-list-container'>

        {
            category &&
            <Breadcrumb
                loading={loading}
                categories={category} />

        }
        {products?.length > 0 && !loading && <section
            className='product-list'
        >
            {

                products?.map((item, index) => (
                    <React.Fragment key={index} >
                        <Product product={item} />
                    </React.Fragment>
                ))
            }
        </section>

        }
        {
            products.length <= 0 && !loading &&
            <h1 className='empty-state'>Sin resultados</h1>
        }
        {
            loading &&
            <h1 className='empty-state'>Cargando productos...</h1>
        }
    </div>
    )
}

export default ProductList
