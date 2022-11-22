import { useEffect, useState } from "react";
//import { useParams } from "react-router-dom";

// Own components
import ItemList from "./ItemList";

// Mock
import { ItemsMock } from '../mocks/Items.mock';

const ItemListContainer = () => {
  //const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    new Promise((resolve) =>
      setTimeout(() => {
        resolve(ItemsMock);
      }, 2000)
    )
    .then( (data) => setProducts(data) );
    /* .then((data) => {
      if (category) {
        const categories = data.filter(
          (product) => product.category === category
        );
        setProducts(categories);
      } else {
        setProducts(data);
      }
    }); */
  }, []);

  if (products.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;