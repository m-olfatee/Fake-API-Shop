import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import MyContext from '../../context/MyContext'

const Cart = () => {

  const context = useContext(MyContext)
  const { cart,
    handleAddToCart,
    handleItemTotal,
    handleReduceFromCart,
    handleRemoveFromCart,
    handleTotalPrice,
    auth,
    handleCheckout } = context
  const navigate = useNavigate()
  const itemTotal = handleItemTotal(cart)

  if (cart.length === 0)
    return (
      <section className='contact'>
        <p>There are no items in your cart</p>
        <button onClick={() => navigate('/products')} className="custom-btn btn-3">
          <span>Return</span>
        </button>
      </section>
    )

  const cartList = cart.map((item, index) => {
    return (
      <article key={item.id} className='cartItem'>
        <img src={item.image} alt={item.title} />
        <section>
          <h5>{item.title}</h5>
          <p>
            Quantity <span>{item.quantity}</span>
          </p>
          <p>€{item.price.toFixed(2)}</p>
          <h4>Item Total {itemTotal[index].toFixed(2)} €</h4>
        </section>
        <button onClick={() => handleAddToCart(item)} className="custom-btn btn-3">
          <span>Add one more</span>
        </button>
        <button
          onClick={() => handleReduceFromCart(item)} className="custom-btn btn-3">
          <span>Lose one</span>
        </button>
        <button
          onClick={() => handleRemoveFromCart(item)} className="custom-btn btn-3">
          <span>Remove Item</span>
        </button>
      </article>
    );
  });

  return (
    <section className='cart-page'>
      {cartList}
      <h3>Total Price is: {handleTotalPrice(cart).toFixed(2)} €</h3>
      <button onClick={() => {
        if (auth) handleCheckout()
        navigate('/checkout');
      }} className="custom-btn btn-3"><span>Buy now!</span> </button>
    </section>
  );
}

export default Cart
