import { images } from '../assets/Image'
import './Features.style.scss'

export default function Features() {
    return (
        <div className="features">
            <span>Фичи</span>
            <h1>Краткое описание <br /> наших преимуществ</h1>
            <div className='features-box'>
                <div className="feature">
                    <img src={images.fast} alt="" />
                    <h3>Быстро</h3>
                    <p>Lorem ipsum dolor sit, amet consecting elit. Iure, facere! Nulla consequuntur magni tempore adipisci?</p>
                </div>
                <div className="feature">
                    <img src={images.safety} alt="" />
                    <h3>Надежно</h3>
                    <p>Lorem ipsuetur adipisicing. Iure consequuntur magni tempore adipisci?</p>
                </div>
                <div className="feature">
                    <img src={images.comfort} alt="" />
                    <h3>Уютно</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, facere! Nulla consequuntur magni tempore adipisci?</p>
                </div>
            </div>

        </div>
    )
}