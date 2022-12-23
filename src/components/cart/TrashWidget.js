import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Trash.scss'

const TrashWidget = ( { itemId } ) => {

    const { removeItem } = useContext(CartContext);

    return(
        <button onClick={() => removeItem(itemId)} className='clear'>
            <FontAwesomeIcon icon={faTrash} /> Eliminar
        </button>
    )
}

export default TrashWidget