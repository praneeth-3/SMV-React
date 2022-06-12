import React, {useState} from 'react';
import './Product.css'

function Product(props){
    const [imgIndex, setImgIndex] = useState(0);

    function ShowPrevImg(e){
        if(imgIndex > 0)
        {
            setImgIndex((curImgIndex)=> curImgIndex - 1);
        }
    }
    function ShowNextImg(e){
        if(imgIndex < (props.images.length-1))
        {
            setImgIndex((curImgIndex)=> curImgIndex + 1);
        }
    }
    return (
        <span className='product col-xl-4 col-lg-5 col-md-12'>
            <div className='card'>
                <img src={props.images[imgIndex]} className='card-img-top product-img' alt={props.name}/>
                <div className='card-img-overlay'>
                    <button className={'btn img-left-button disable-' + (imgIndex === 0)} onClick={ShowPrevImg}>
                        <i className='bi bi-chevron-compact-left'></i>
                    </button>
                    <button className={'btn img-right-button disable-' +  (imgIndex === (props.images.length-1))} onClick={ShowNextImg}>
                        <i className='bi bi-chevron-compact-right'></i>
                    </button>
                </div>
                <div className='card-body'>
                    <h5 className='card-title capitalize'>{props.name}</h5>
                </div>
            </div>
        </span>
    );
}

export {Product};