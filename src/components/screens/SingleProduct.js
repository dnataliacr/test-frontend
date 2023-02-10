import React, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import axios from "axios";
import Button from "../Button";
import BreadCrumb from "../Breadcrumb";


const SingleProduct = () => {
    let { id } = useParams();
    const [singleProduct, setSingleProduct] = useState({})
    const [categories, setCategories] = useState([])
    const [description, setDescription] = useState('')
    
    useEffect(() => {
        const fetchProductData = async () => {

            const response = await axios.get(`http://localhost:8000/api/items/${id}`)
            setSingleProduct(response?.data?.item);
        }

        const fetchProductDescription = async () => {
            const response = await axios.get(`http://localhost:8000/api/items/${id}/description`)
            setDescription(response?.data?.plain_text);

        }
        fetchProductData()
        fetchProductDescription()
    }, [])
    useEffect(() => {
        const fetchCategory = async () => {
            const response = await axios.get(`http://localhost:8000/api/categories/${singleProduct?.category_id}`)
            setCategories(response?.data?.data);

        }
        if (singleProduct?.category_id) {
            fetchCategory()
        }
    }, [singleProduct])

    return (
        <div className="container">
            <BreadCrumb categories={categories} />
            <div className="single-product-container">
                <section>
                    <div className="product-image">
                        <img src={singleProduct?.picture} alt='single product'/>
                    </div>
                    <div className="product-description">
                        <h3>Descripción del producto</h3>
                        <p>{description}</p>
                    </div>
                </section>
                <aside>
                    <div className="product-data">
                        <h1> {singleProduct?.title}</h1>
                        <span>  ${singleProduct?.price?.amount}</span>
                        <Button label={'Comprar'} type={'primary'} url={''} />
                    </div>
                </aside>



            </div>
        </div>
    )
}

export default SingleProduct