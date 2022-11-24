import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { ItemsMock } from '../mocks/Items.mock';

const ItemListContainer = () => {
  const { category } = useParams();
  console.log(category);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    new Promise((resolve) =>
      setTimeout(() => {
        resolve(ItemsMock);
      }, 2000)
    )
    .then((data) => {
      if (category) {
        const categories = data.filter(
          (product) => product.category === category);
        setProducts(categories);
      } else {
        setProducts(data);
      }
    });
  }, [category]);

  if (products.length === 0) {
    return <p>Loading...</p>;
  }

  return (
      <ItemList products={products} />
  );
};

export default ItemListContainer;