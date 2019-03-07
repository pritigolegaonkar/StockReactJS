import React from 'react'
import Stock from './Stock'

class SearchStocks extends React.Component{
    
    constructor(props){
        super(props);
       this.selectedStockChild=this.selectedStockChild.bind(this);
        this.state={
            stockParent: ''
        };
    }

    selectedStockChild(stockSymbol) {
        this.setState({
            stockParent: stockSymbol
          });
        this.props.selectedParentStock1(stockSymbol);
      }

    render(){
        var  allStocks=this.props.searchList;
        if(this.props.searchList)
      //  console.log(typeof this.props.searchList);
        return (
            <div className="seached_info">
            {allStocks.map((stock, index) => {
                return (
                    <Stock selectedStockParent={this.selectedStockChild} 
                    key={stock.symbol} value={stock.symbol} stockName={stock.name} />
                )
            })}
            </div>
        )
    
          }
    
};
export default SearchStocks;