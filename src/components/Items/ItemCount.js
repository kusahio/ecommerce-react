const ItemCount = ({count, handleCount}) =>{
    return(
        <div className="itemCount">
            <button onClick={() => handleCount('minus')}>-</button>
            <label type='number' name='qty' >
                {count}
            </label>
            <button onClick={() => handleCount('plus')}>+</button>
        </div>
    )
}

export default ItemCount