import { useContext } from 'react'
import { Link } from 'react-router-dom'
import MyContext from '../../context/MyContext'
import { MdAddShoppingCart } from 'react-icons/md';

const Products = () => {
    
    const context = useContext(MyContext)
    const { results, handleAddToCart } = context

    const items = results.map((item) =>
        <li key={item.id} >
            <Link to='/product-detail' state={item}>
                <img src={item.image} alt={item.title} />
            </Link>
            <p>{item.title}</p>
            <p>{item.price} €</p>
            <button onClick={() => handleAddToCart(item)}><MdAddShoppingCart /></button>
        </li >
    )
    
    return (
        <section className='products'>
            {items}
        </section>
    )
}

export default Products
