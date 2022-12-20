import { useState, useContext } from 'react';
import { Layout } from '../components/Layout';
import { useNavigate } from 'react-router-dom';
import Item from '../components/Items/Item';
import Loader from '../components/Loader';
import { CartContext } from '../context/CartContext';
import TrashWidget from '../components/cart/TrashWidget';


function CartView() {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { productsAdded, clear } = useContext(CartContext);

  const handleFinishPurchase = () => {
    setLoading(true);
    setTimeout(() => {
      clear();
      setLoading(false);
      alert("Compra finalizada");
      navigate("/");
    }, 2000);
  }

  return (
    <Layout >
      cart view
      {productsAdded.length === 0 ? (
        <h1 className=''>No has agregado productos</h1>) :
        (<div>
          <div className=''>
            {productsAdded.map((product, index) => {
              const quantityAdded = product.quantityAdded;
              
              return (
                <div key={index} className=''>
                  <Item  product={product.item} quantityAdded={quantityAdded} />
                  <TrashWidget  itemId={product.item.id} />
                </div>
              );
            })}
          </div>
          <div className=''>
            {isLoading ? (<Loader />) :
              (<button onClick={handleFinishPurchase} className=''>
                Finalizar Compra
              </button>)
            }
          </div>
        </div>
        )}

    </Layout>
  )
}

export default CartView;