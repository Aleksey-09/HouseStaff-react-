
import React, { useState } from 'react'
import Item from './Item'
import { images } from '../assets/Image'
import Categories from './Categories'
import './Items.style.scss'
import { products } from '../data/Products'

export default function Items({ activeCategory, addToCart }) {
    const [selectedProduct, setSelectedProduct] = useState(null)
    const categoryMap = {
      'Все': 'Все',
      'Стулья': 'chairs',
      'Столы': 'tables',
      'Диваны': 'sofa',
      'Свет': 'light'
    };

    const filteredProducts = activeCategory === 'Все'
    ? products : products.filter(product => product.category === categoryMap[activeCategory])
  
  return (

    
    <div className="products">
      <div className='items'>
        {filteredProducts.map(product => (
          <Item
          key={product.id}
          img={product.img}
          title={product.title}
          desc={product.desc}
          price={product.price}
          onAddToCart={() => addToCart(product)}
          onClick={() => setSelectedProduct(product)}
          />
        ))}
      </div>

      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProduct(null)}>×</button>
            
            <img 
              src={images[selectedProduct.img]} 
              alt={selectedProduct.title} 
              className="modal-image"
            />
            
            <h2>{selectedProduct.title}</h2>
            <p>{selectedProduct.desc}</p>
            <p className="modal-price">{selectedProduct.price}$</p>
            
            <button 
              className="modal-add-btn"
              onClick={() => {
                addToCart(selectedProduct);
                setSelectedProduct(null);
              }}
            >
              Добавить в корзину
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
