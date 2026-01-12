import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Items from './components/Items'
import Features from './components/Features'
import Categories from './components/Categories'
import './index.scss'



function App() {
  const [count, setCount] = useState(0)
  const [activeCategory, setActiveCategory] = useState('Все');
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [notification, setNotification] = useState(null)
  

  const addToCart = (product) => {
    setCartItems([...cartItems, product])
    setNotification(`Добавлен: ${product.title}`)
    setTimeout(() => setNotification(null), 2000)
  }

  const removeFromCart = (indesToRemove) => {
    setCartItems(cartItems.filter((_, index) => index !== indesToRemove))
  }

  

  return (
    <div className='app'>
      <Header
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
      />
      <Features/>
      <Categories
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory}
      />
      <Items 
        activeCategory={activeCategory}
        addToCart={addToCart}
        />
      <Footer />
      
          {notification && (
      <div className="notification">
        {notification}
      </div>
    )}
    </div>
    
  )
}

export default App
