import { images }  from "../assets/Image";
import './Items.style.scss'


export default function Item(props) {
    return (
         <div className="item" onClick={props.onClick}>
          <img src={images[props.img]} alt={props.title} />
          <h2>{props.title}</h2>
          <p>{props.desc}</p>
          <b>{props.price}$</b>
          <div className="add-to-cart" onClick={e => {
            e.stopPropagation();  // останавливаем всплытие, чтобы не открывалась модалка
            props.onAddToCart();
        }}>+</div>
        </div>
    )
}