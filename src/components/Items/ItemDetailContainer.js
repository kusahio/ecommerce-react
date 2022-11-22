import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

import { ItemsMock } from '../mocks/Items.mock';

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);

  useEffect(() => {
    new Promise((resolve) => setTimeout(() => resolve(ItemsMock[3]), 2000)).then(
      (data) => setItem(data)
    );
  }, []);

  if (!item) {
    return <p>Loading...</p>;
  }

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;