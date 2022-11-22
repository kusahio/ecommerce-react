const ItemDetail = ({ item }) => {
    return (
        <ul>
            <img src={item.img} alt="item" />
            <li>{item.brand}</li>
            <li>{item.description}</li>
            <li>${item.price}</li>
        </ul>
    );
};

export default ItemDetail;