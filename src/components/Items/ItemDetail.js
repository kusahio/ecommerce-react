import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCount from "./ItemCount";
import { useGetItemImg } from "../../hooks/useGetItemImg";
import Loader from "../Loader";
import './ItemDetail.scss';

const ItemDetail = ({ item }) => {

    const { addItem, isInCart } = useContext(CartContext)
    const navigate = useNavigate();
    const [count, setCount] = useState(1);
    const [currentStock, setCurrentStock] = useState(item.stock);
    const maxQuantity = currentStock;
    const img = useGetItemImg(item.img);

    function handleCount(type) {
        if (type === "plus" && count < maxQuantity) setCount(count + 1);
        if (type === "minus" && count > 1) setCount(count - 1);
    }

    function handleAdd() {
        if (currentStock < count) alert("No hay suficiente stock de este producto");
        else setCurrentStock(currentStock - count);
        addItem(item, count);
    }

    function handleCheckout() {
        navigate('/cart');
    }

    return (
        <div className='productDetail'>
            <div className="img">
                {!img ? (<Loader />) : (
                    <img className='' src={img} alt={item.description} />)}
            </div>
            <div className="details">
                <ul>
                    <li className="brand">{item.brand}</li>
                    <li className="description">{item.description}</li>
                    <li className="price">${item.price}</li>
                    {currentStock > 0 && (<li className="stock">Stock: {currentStock}</li>)}
                </ul>

                <div className='actions'>
                    {currentStock > 0 ? (<ItemCount count={count} handleCount={handleCount} />) :
                        (<span className=''>Sin stock</span>)}
                    <div className='buttons'>
                        <button onClick={handleAdd} className='' disabled={currentStock === 0}>
                            Agregar al carrito
                        </button>
                        <button disabled={!isInCart(item.id)} onClick={handleCheckout} className=''>
                            Finalizar Compra
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;