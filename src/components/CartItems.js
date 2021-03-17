import CartItem from "./CartItem";

const CartItems = ({items, products}) => {

    const totalSum = () => {
        return items.map(item => item.quantity*products.find(product => product.id === item.product_id).priceInCents).reduce((acc, cur) => acc+cur, 0);
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
                {items.map(item => <CartItem
                                             product={products.find(product => product.id === item.product_id).name}
                                             price={products.find(product => product.id === item.product_id).priceInCents}
                                             quantity={item.quantity}/>)}
            </div>
            <div>Total Price: ${totalSum()/100}</div>
        </div>
    )
}

export default CartItems;