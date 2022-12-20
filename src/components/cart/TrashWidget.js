import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TrashWidget = ( { itemId } ) => {

    const { removeItem } = useContext(CartContext);

    return(
        <button onClick={() => removeItem(itemId)} className='clear'>
            <FontAwesomeIcon icon={faTrash} />
        </button>
    )
}

export default TrashWidget