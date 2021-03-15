import CartItem from "./CartItem";

const CartItems = ({items}) => {

    const totalSum = () => {
        return items.map(item => item.quantity*item.product.priceInCents).reduce((acc, cur) => acc+cur, 0);
    };

    return (
        <div className="container">
            <h1>Cart Items</h1>
            <div className="list-group">
                <div className="list-group-item">
                    <div className="row">
                        <div className="col-md-8">Product</div>
                        <div className="col-md-2">Price</div>
                        <div className="col-md-2">Quantity</div>
                    </div>
                </div>
                {items.map(item => <CartItem id={item.id}
                                             product={item.product.name}
                                             price={item.product.priceInCents}
                                             quantity={item.quantity}/>)}
            </div>
            <div>Total Price: ${totalSum()/100}</div>
        </div>
    )
}

export default CartItems;