import React from 'react';

class Stock extends React.Component{
    constructor(props){
        super(props);
        this.addStock=this.addStock.bind(this);
        this.state={
            stockChild:''
        };
    }

    addStock = async (event) => {
        this.setState({
            stockChild: event.target.id
        });
        this.props.selectedStockParent(event.target.id);
        this.setState({
            stockChild: ''
        });
        
    }

    render(){
        return(
            <div  className="weather__value" 
            id={this.props.value} 
            onClick={this.addStock}>
            {this.props.stockName}</div>
        )
    }
    
}


export default Stock;