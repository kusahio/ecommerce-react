import { useContext } from 'react';
import { Layout } from '../components/Layout';
import { useNavigate } from 'react-router-dom';
import Item from '../components/Items/Item';
import { CartContext } from '../context/CartContext';
import TrashWidget from '../components/cart/TrashWidget';
import './CartView.scss';


function CartView() {
  const navigate = useNavigate();
  const { productsAdded: items, totalAmount } = useContext(CartContext);

  const goToCheckout = () => {
    navigate("/checkout");
  };


  return (
    <Layout >
      {items.length === 0 ? (
        <h1 className=''>No has agregado productos</h1>) :
        (<div className='cartview'>
          {items.map((product, index) => {
              const quantityAdded = product.quantityAdded;
              
              return (
                <div key={index} className='block'>
                  <Item  product={product.item} quantityAdded={quantityAdded} />
                  <TrashWidget  itemId={product.item.id} />
                </div>
              );
            })}
          <div className='next'>
          <span>
                  Total a pagar: <strong>${totalAmount}</strong>
                </span>
                <button
                  onClick={goToCheckout}
                  className="rounded-lg p-2 bg-gray-800 text-white"
                >
                  Ir al Checkout
                </button>
          </div>
        </div>
        )}

    </Layout>
  )
}

export default CartView;