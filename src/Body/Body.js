import React from 'react';
import Portfolio from '../Portfolio/Portfolio';

export default class Body extends React.Component {

    state = {
        addshares: [],
        name: '',
        price: '',
        qunatity: '',
        exchangename: '',
        currentstockprice : '0'
    }

    shareName = (event) => {
        this.setState({ name: event.target.value })
    }

    sharePrice = (event) => {
        this.setState({ price: event.target.value })
    }

    shareQuantity = (event) => {
        this.setState({ qunatity: event.target.value })
    }

    exchangeName = (event) => {
        this.setState({ exchangename: event.target.value })
    }

    marketPrice = (name1, newvalue) => {
        let result = this.state.addshares.find(
            (element) => { return element.name === name1 }
        ) 
        result.currentstockprice = newvalue        
        let addshares = [...this.state.addshares];
        addshares[name1] = result;
        this.setState({addshares});
    }

    shareDelete = (itemId) => {
        const addshares = this.state.addshares.filter(item => item.name !== itemId);
        this.setState({ addshares: addshares });
    };

    addSharesonClick = () => {
        let addshares = [...this.state.addshares];
        let { name, price, qunatity, exchangename, currentstockprice} = this.state;
        addshares.push({ name, price, qunatity, exchangename, currentstockprice })
        this.setState({ addshares })        
    }

    render() {
        return (
            <div className="nav-add-share">
                <div>
                    <label className="nav-la">Enter Share Name </label>
                    <input onChange={this.shareName}></input>
                    <label className="nav-la">Entry Price</label>
                    <input onChange={this.sharePrice}></input>
                    <label className="nav-la">Quantity</label>
                    <input onChange={this.shareQuantity}></input>
                    <label for="exchange" className="nav-la">Exchange Name</label>
                    <select name="exchange" id="exchange" onChange={this.exchangeName}>
                        <option value="" disabled selected hidden>select exechange</option>
                        <option value="bse">BSE</option>
                        <option value="bse">BSE</option>
                        <option value="nse">NSE</option>
                        <option value="nyse">NYSE</option>
                    </select>
                    <input type="button" value="add" onClick={this.addSharesonClick}></input>
                </div>
                <Portfolio sharescollection={this.state.addshares} onDelete={this.shareDelete} currentPrice={this.marketPrice}/>
            </div>
        )
    }
}