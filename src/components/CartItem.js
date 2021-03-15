const CartItem = ({product, price, quantity}) => {
    return (
        <div className="list-group-item">
            <div className="row">
                <div className="col-md-8">{product}</div>
                <div className="col-md-2">${price/100}</div>
                <div className="col-md-2">{quantity}</div>
            </div>
        </div>
    )
}

export default CartItem;