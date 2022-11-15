import { useState, useEffect } from 'react';
import './ItemListContainer.scss';

function ItemListContainer({ greeting }) {
  const [count, setCount] = useState(0);

  const addProduct = () => {
    setCount(count + 1)
    if (count === 5){
      setCount(5)
    }
  }

  const quitProduct = () => {
    setCount(count - 1)
    if (count === 0){
      setCount(0)
    }
  }

  useEffect( () => {
    console.log(count)
  }, [count] );

  const products = [
    {
      id: "1",
      name: "keyboard",
      description: "keyboard rgb",
      stock: 5,
    },
  
    {
      id: "2",
      name: "mouse",
      description: "mouse rgb",
      stock: 5,
    }
  ];

  const [product, hasProduct] = useState([]);

  const productList = new Promise((resolve) =>
    setTimeout(() => {
      resolve(products);

    }, 3000)
    );

    productList.then((data) => hasProduct(data));

  return (
    <div className='itemListContainer'>
      <div className='banner'>
      </div>
      <div className='greeting'>
        <h1>{greeting}</h1>
        <ul>
          {product.map( (x) => <li key={x.id}>{x.description}</li> )}
        </ul>
      </div>
      <div>
        <button onClick={quitProduct}>quit</button>
        <span>{count}</span>
        <button onClick={addProduct}>add</button>
      </div>
      
    </div>
  )
}

export default ItemListContainer
