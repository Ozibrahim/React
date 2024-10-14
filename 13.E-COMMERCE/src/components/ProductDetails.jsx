import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { setSelectedProduct } from '../redux/slices/productSlice'
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { addToBasket } from '../redux/slices/basketSlice';

function ProductDetails() {
    const { id } = useParams();
    const { products, selectedProduct } = useSelector((store) => store.product);
    const dispatch = useDispatch();
    const { price, image, title, description } = selectedProduct;
    const [count,setCount]=useState(0);
    const increment = ()=>{
        setCount(count+1);
    }
    const decrement = ()=>{
        if(count>0){

            setCount(count-1);
        }
        
    }

    

    const addbasket=()=>{
        const payload={
            id,
            price,
            image,
            title,
            description,
            count
        }
        dispatch(addToBasket(payload));
        dispatch(calculateBasket());
    }

    useEffect(() => {
        getProductById();

    }, [])

    const getProductById = () => {
        products && products.map((product) => {
            if (product.id == id) {
                dispatch(setSelectedProduct(product));
            }
        })
    }

    return (
        <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'center', msFlexDirection: 'row' }}>
            <div>
                <img src={image} width={300} height={500} />
            </div>
            <div style={{ marginLeft: '20px' }}>
                <h2>{title}</h2>
                <h3>{description}</h3>
                <h1>{price}₺</h1>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <CiCirclePlus onClick={increment} style={{ fontSize: '40px', marginRight: '5px' }} />
                    <span style={{ fontSize: '35px' }}>{count}</span>
                    <CiCircleMinus onClick={decrement} style={{ fontSize: '40px', marginLeft: '5px' }} />
                </div>
                <div>
                    <button onClick={addbasket}
                    style={{
                        marginTop:'20px',
                        border:'none',
                        padding:'10px',
                        backgroundColor:'rgb(185,76,76)',
                        color:'white',
                        borderRadius:'5px'
                        }} >Sepete Ekle</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails