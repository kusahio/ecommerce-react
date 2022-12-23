import './PopUp.scss';

const PopUp = ( { children } ) => {
    return(
        <div className='popUpContainer'>
            <div className='popUp'>
                {children}
            </div>
        </div>
    )
}

export default PopUp