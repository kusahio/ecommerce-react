import { useGetItem } from "../../hooks/useGetItem";
import ItemList from "./ItemList";
import Loader from "../Loader";

const ItemListContainer = () => {
  const items = useGetItem();

  if(!items){
    return <Loader />
  }

  return (
    <ItemList products={items} />
  );
};

export default ItemListContainer;