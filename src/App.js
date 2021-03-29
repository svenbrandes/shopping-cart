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
        const responseProducts = await fetch(`${process.env.REACT_APP_API_URL}/api/products`);
        const responseItems = await fetch(`${process.env.REACT_APP_API_URL}/api/items`);
        const products = await responseProducts.json();
        const items = await responseItems.json();
        this.setState({products: products, cartItemsList: items});
    }

    addItemOLD = item => {
        const indexOfItem = this.state.cartItemsList.findIndex(existingItem => existingItem.product_id == item.product_id);
        const updatedItems = [...this.state.cartItemsList];
        indexOfItem === -1 ? updatedItems.concat(item) :
            updatedItems[indexOfItem].quantity = updatedItems[indexOfItem].quantity+item.quantity;
        this.setState({cartItemsList: updatedItems});
    }

    addItem = async itemToAdd => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/items`, {
            method: 'POST',
            body: JSON.stringify(itemToAdd),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        });
        const item = await response.json();
        this.setState({cartItemsList: [...this.state.cartItemsList, item]});
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
