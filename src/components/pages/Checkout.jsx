import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import MyContext from '../../context/MyContext'

const Checkout = () => {

    const context = useContext(MyContext)
    const { auth } = context
    const navigate = useNavigate()
    let checkout = null

    if (!auth) {
        return (
            <section>
                <p>You need to login before finalize your order!</p>
                <button onClick={() => navigate('/login')} className="custom-btn btn-3">
                    <span>Login now</span></button>
            </section>
        )
    } else {
        checkout =
            <section>
                <h2>Thanks For choosing our shop, you will receive an email with your shopping details.</h2>
                <button onClick={() => navigate('/')} className="custom-btn btn-3">
                    <span>Home</span></button>
            </section>
    }

    return (
        <>
            {checkout}
        </>
    )
}

export default Checkout
