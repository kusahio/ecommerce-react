import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { ItemsMock } from '../mocks/Items.mock';
import { useParams } from "react-router-dom";

const ItemDetailContainer = ( ) => {

  const { id } = useParams();

  const [itemD, setItem] = useState(null);

  useEffect(() => {
    new Promise((resolve) => setTimeout(() => resolve(ItemsMock), 2000))
    .then((data) => {
      if( id ){
        const itemResult = data.find(
          (item) => item.id === id)
          setItem(itemResult)
      }
    });
  }, [id]);

  if (!itemD) {
    return <p>Loading...</p>;
  }

  return <ItemDetail item={itemD} />;
};

export default ItemDetailContainer;