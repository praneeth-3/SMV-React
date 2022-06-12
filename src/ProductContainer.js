import React, { useEffect, useState } from 'react';
import {Product} from './Product';
import './Product.css'

function ProductContainer(props){
    const [productElements, setImageElements] = useState(<></>);
    const updateImages = ()=>{
        fetch('./images_list.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                const products = data.images[props.productType];
                if(products && typeof(products[0])=='string'){
                    setImageElements(() => products.map((item) => <Product key={item} name={""} images={[item]} />));
                }
                else{
                    setImageElements(() => products.map((item) => <Product key={item.name} name={item.name} images={item.images} />));
                }
            });
    }
    useEffect(updateImages, [props.productType]);
    
    return(
        <div className='container'>
            <h1 className='capitalize'>{props.productType}</h1>
            <div className='row'>
                {productElements}
            </div>
        </div>
    );
}

export {ProductContainer};