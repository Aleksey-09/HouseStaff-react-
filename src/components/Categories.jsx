import { useState } from 'react';
import './Categories.style.scss'


export default function Categories({ activeCategory, setActiveCategory }) {
    
        const categories = [
        'Все',
        'Стулья',
        'Столы',
        'Диваны',
        'Свет'
        ]

   
    return (

        <div className="categories">
            <h2>Категории</h2>
            <div className="category-list">
                {categories.map((cat, index) => (
                    <button key={index} className={`category-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}>{cat}</button>
                ))}
            </div>
        </div>
    )
}