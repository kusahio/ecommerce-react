import './ItemListContainer.scss';

function ItemListContainer({ greeting }) {
  return (
    <div className='itemListContainer'>
      <div className='banner'>
      </div>
      <div className='greeting'>
        <h1>{greeting}</h1>
      </div>
    </div>
  )
}

export default ItemListContainer
