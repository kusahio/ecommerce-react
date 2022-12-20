import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {

    const { addItem } = useContext(CartContext)
    const navigate = useNavigate();
    const [count, setCount] = useState(1);
    const [currentStock, setCurrentStock] = useState(item.stock);
    const maxQuantity = currentStock;

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
        <div>
            <ul>
                <img src={item.img} alt="item" />
                <li>{item.brand}</li>
                <li>{item.description}</li>
                <li>${item.price}</li>
                {currentStock > 0 && (<li>Stock: {currentStock}</li>)}
            </ul>

            <div className=''>
                {/* Count */}
                {currentStock > 0 ? (
                    <ItemCount count={count} handleCount={handleCount} />
                ) : (
                    <span className=''>Sin stock</span>
                )}
                <div className=''>
                    <button onClick={handleAdd} className='' disabled={currentStock === 0}>
                        Agregar al carrito
                    </button>
                    <button onClick={handleCheckout} className=''>
                        Finalizar Compra
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;