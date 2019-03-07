import React from 'react'

class StockAdapter extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(  
            <div>
        <div className="col-md=4" id={this.props.value}> {this.props.stockSymbol} ></div>
        <div className="col-md=4" > {this.props.stockData.latestPrice}</div>
        <div className="col-md=4" > {this.props.stockData.changePercent} </div>
            </div>
        )
    }
}

export default StockAdapter;