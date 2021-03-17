import React, {Component} from 'react';

class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: "",
            product_id: 1
        };
    }

    onChange = e => this.setState({[e.target.id]: parseInt(e.target.value)});


    onSubmit = (e) => {
        e.preventDefault();
        this.state.quantity > 0 ? this.props.onItemAdded(this.state) : alert("Please enter a quantity");
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
                    <select onChange={this.onChange} id="product_id" className="form-control">
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