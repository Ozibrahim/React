import React from 'react'
import '../css/Product.css'
import { useNavigate } from 'react-router-dom';

function Product({ product }) {
    const { id, price, image, title, description } = product;

    const navigate = useNavigate();

    return (
        <div className='card'>
            <img className='image' src={image} alt="" />
            <div>
                <div>

                <p className='product-text-title'>{title}</p>
                </div>
                <div>
                    <h3 className='product-text-price'>{price}₺</h3>

                </div>
                <div className='flex-row'>
                    <button className='product-btn' onClick={()=>navigate("/product-details/"+id)}>Detayına Git</button>
                </div>
            </div>

        </div>
    )
}

export default Product