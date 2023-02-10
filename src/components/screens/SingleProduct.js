import React, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import axios from "axios";
import BreadCrumb from "../Breadcrumb";

const SingleProduct = ({ product }) => {
    let { id } = useParams();

    return (
        <div className="container">
            <BreadCrumb categories={categories} />
            <div className="single-product-container">
                <section>
                    <div className="product-image">
                        <img src={singleProduct?.picture} />
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