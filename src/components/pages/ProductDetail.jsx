import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const ProductDetail = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const { title, image, price, description } = location.state

    return (
        <section className='details contact'>
            <h2>{title}</h2>
            <img src={image} alt={title} />
            <p>{description}</p>
            <p>{price} €</p>
            <button onClick={() => navigate('/products')} className="custom-btn btn-2">
                <span>To Products</span><span>Return</span>
            </button>
        </section>
    )
}

export default ProductDetail
