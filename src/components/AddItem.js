import React, {Component} from 'react';

class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: "",
            product: this.props.products[0]
        };
    }

    onChange = (e) => {
        this.setState({[e.target.id]: e.target.value});
    }

    onSelect = (e) => {
        const selectedItem = this.props.products.find(product => (product.id == e.target.value));
        this.setState({product: selectedItem});
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state);
        this.setState({
            quantity: ""
        })
    }

    render() {
        return (
            <div className="container">
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Quantity</label>
                    <input onChange={this.onChange} id="quantity" className="form-control" value={this.state.quantity}/>
                </div>
                <div className="form-group">
                    <label>Products</label>
                    <select onChange={this.onSelect} id="product" className="form-control">
                        {this.props.products.map(product => <option value={product.id}>{product.name} - ${product.priceInCents/100}</option>)}
                    </select>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
            </form>
            </div>
        )
    }
}

export default AddItem;