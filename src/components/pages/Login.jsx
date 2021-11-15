import React, { useContext, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import MyContext from '../../context/MyContext'

const Login = () => {

    const navigate = useNavigate()
    const context = useContext(MyContext)
    const { auth, handleLogin, formLogin } = context
    const { username, password } = formLogin
    const ref = useRef()

    useEffect(() => {
        ref.current.focus()
    }, [])

    let loggedIn = null

    if (auth) {
        loggedIn =
            <form>
                <h2>Are you sure that you want to logout?</h2>
                <button
                    className="custom-btn btn-2"
                    ref={ref}
                    onClick={(event) => handleLogin(event, 'logout')}>
                    <span>LOGOUT!</span><span>Logout</span>
                </button>
            </form>
    } else {
        loggedIn =
            <form>
                <h2>Enter your username and password.</h2>
                <div className="form-floating mb-3">
                    <input type="text"
                        name="username"
                        className="form-control"
                        value={username}
                        ref={ref}
                        onChange={(event) => handleLogin(event, 'input')}
                        id="floatingInput"
                        placeholder="Your full name:" required />
                    <label htmlFor="floatingInput">Your Username: </label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password"
                        name="password"
                        value={password} onChange={(event) => handleLogin(event, 'input')}
                        className="form-control" id="floatingEmail" placeholder="Your E-Mail:" required />
                    <label htmlFor="floatingInput">Your Password: </label>
                </div>
                <button onClick={(event) => {
                    handleLogin(event, 'submit');
                    navigate('/login-check')
                }}
                    className="custom-btn btn-2"><span>LOGIN!</span><span>Login</span></button>
            </form>
    }

    return (
        <section className='contact'>
            {loggedIn}
        </section>
    )
}

export default Login
