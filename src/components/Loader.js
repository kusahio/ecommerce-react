import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Loader = () => {
    return(
        <div className='spinner'>
            <FontAwesomeIcon icon={faSpinner} />
        </div>
    )
}

export default Loader