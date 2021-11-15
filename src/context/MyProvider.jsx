import { useState } from "react";
import MyContext from "./MyContext";
import useFetch from "../customHooks/useFetch";

const MyProvider = (props) => {

    const USERNAME = process.env.REACT_APP_USERNAME
    const PASSWORD = process.env.REACT_APP_PASSWORD

    const [formLogin, setFormLogin] = useState({ username: '', password: '' })
    const [auth, setAuth] = useState(false)
    const [cart, setCart] = useState([])
    const [login, setLogin] = useState('Login')

    const url = 'https://fakestoreapi.com/products'
    const initialState = { results: [], loading: true, error: '' }
    const { results, loading, error } = useFetch(url, initialState)

    const handleAddToCart = (item) => {
        const available = cart.find((current) => current.id === item.id)
        if (available === undefined) {
            setCart([...cart, { ...item, quantity: 1 }]);
        }
        else {
            const index = cart.indexOf(available)
            available.quantity += 1
            let copyCart = [...cart]
            copyCart.splice(index, 1, available)
            setCart(copyCart)
        }
    }

    const handleItemTotal = (cart) => {
        const cartTotal = [...cart]
        return cartTotal.map((item) => item.quantity * item.price)
    }

    const handleReduceFromCart = (item) => {
        const available = cart.find((element) => element.id === item.id)
        const index = cart.indexOf(available)
        available.quantity -= 1
        let copyCart = [...cart]
        available.quantity >= 1
            ? copyCart.splice(index, 1, available)
            : copyCart.splice(index, 1)
        setCart(copyCart)
    }

    const handleRemoveFromCart = (item) => {
        const available = cart.find((element) => element.id === item.id)
        const index = cart.indexOf(available)
        let copyCart = [...cart]
        copyCart.splice(index, 1)
        setCart(copyCart)
    }

    const handleTotalPrice = (cart) => {
        let totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0)
        return totalPrice
    }

    const handleLogin = (event, action) => {
        if (action === 'input') {
            setFormLogin({ ...formLogin, [event.target.name]: event.target.value })
        } else if (action === 'submit') {
            event.preventDefault()
            if (formLogin.username === USERNAME && formLogin.password === PASSWORD) {
                setAuth(true)
                setLogin(`logout ${USERNAME}`)
            } else {
                setAuth(false)
                setLogin(`Login`)
            }
            setFormLogin({ username: '', password: '' })
        } else {
            setLogin('Login')
            setAuth(false)
        }
    }

    const handleCheckout = () => {
        setCart([])
    }

    return (
        <MyContext.Provider value={{
            results,
            loading,
            error,
            cart,
            auth,
            formLogin,
            login,
            handleAddToCart,
            handleItemTotal,
            handleReduceFromCart,
            handleRemoveFromCart,
            handleTotalPrice,
            handleLogin,
            handleCheckout,
            setLogin
        }}>
            {props.children}
        </MyContext.Provider>
    )
}

export default MyProvider