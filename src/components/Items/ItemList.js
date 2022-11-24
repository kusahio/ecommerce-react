import Item from './Item';
import './ItemList.scss'

const ItemList = ({ products }) => {
  return (
    <div className='productGrid'>
      {products.map((product, index) => (
        <Item key={index} product={product} />
      ))}
    </div>
  );
};

export default ItemList;