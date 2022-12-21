import ItemDetail from "./ItemDetail";
import { useGetItem } from "../../hooks/useGetItem";
import Loader from "../Loader";

const ItemDetailContainer = ( ) => {

  const item = useGetItem();

  if(!item) {
    return <Loader />
  }

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;