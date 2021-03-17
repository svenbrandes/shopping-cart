import './App.css';
import React, {Component} from 'react';
import CartHeader from './components/CartHeader';
import CartFooter from "./components/CartFooter";
import CartItems from "./components/CartItems";
import AddItem from "./components/AddItem";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cartItemsList: [],
            products: []
        }
    }

    async componentDidMount() {
        const responseProducts = await fetch("http://localhost:8082/api/products");
        const responseItems = await fetch("http://localhost:8082/api/items");
        const products = await responseProducts.json();
        const items = await responseItems.json();
        this.setState({products: products, cartItemsList: items});
    }

    addItem = item => {
        const indexOfItem = this.state.cartItemsList.findIndex(existingItem => existingItem.product_id == item.product_id);
        const updatedItems = [...this.state.cartItemsList];
        indexOfItem === -1 ? updatedItems.concat(item) :
            updatedItems[indexOfItem].quantity = updatedItems[indexOfItem].quantity+item.quantity;
        this.setState({cartItemsList: updatedItems});
    }

    render() {
        return (
            <div className="App">
                <CartHeader />
                <CartItems items={this.state.cartItemsList} products={this.state.products}/>
                <AddItem onItemAdded={this.addItem} products={this.state.products}/>
                <CartFooter copyright="2021"/>
            </div>
        );
    }


}

export default App;
