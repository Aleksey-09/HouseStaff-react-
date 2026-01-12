import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import './Header.style.scss'
import { images } from '../assets/Image';


export default function Header( {cartOpen, setCartOpen, cartItems = [], removeFromCart} ) {
  
  const totalPrice = cartItems.reduce((sum, item) => {
    const price = parseFloat(item.price.replace('$','').trim())
    return sum + (isNaN(price) ? 0 : price) 
  }, 0)

  return (
    <header>
        <div>
            <span className='logo'>House Staff</span>
            <nav>
                <ul>
                    <div 
                      className="cart-wrapper">
                        <div className='cart-icon' onClick={() => setCartOpen(!cartOpen)}>
                            <FaShoppingCart className={`shop-cart-button ${cartOpen ? 'active' : ''}`} />
                            <span className='cart-count'>
                              {cartItems.length}
                            </span>
                        </div>
                      
                      
                      
                    </div>
                    {cartOpen && (
                      <div className="mini-cart">
                        <p>Товаров в корзине: {cartItems.length}</p>
                        <div className='carts-item'>
                          {cartItems.map((item, index) => (
                            <div key={index} className='cart-item'>
                              <img src={images[item.img]} alt={item.title} className='cart-item-img' />
                              <div className='cart-item-info'>
                                <span>{item.title}</span>
                                <p>{item.price}$</p>
                              </div>
                              <div>

                              </div>
                               <FaTrash className='cart-delet' onClick={() => removeFromCart(index)}/>
                              </div>
                          ))}
                        </div>
                        <div className='cart-total'>
                          <span>Итого:</span>
                          <strong>{totalPrice.toFixed(2)}$</strong>
                        </div>
                        <button onClick={() => setCartOpen(false)}>
                          Закрыть
                        </button>
                      </div>
                    )}
                    <li><a href="/">Про нас</a></li>
                    <li><a href="/">Контакты</a></li>
                    <li><a href="/">Кабинет</a></li>
                </ul>
                
            </nav>
        </div>
        <div className='presentation'>

        </div>
    </header>
  )
}
