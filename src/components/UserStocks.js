import React from 'react'
import StockAdapter from './StockAdapter'
class UserStocks extends React.Component{
    
    constructor(props){
        super(props);
       //this.selectedStockChild=this.selectedStockChild.bind(this);
        this.state={
            stockParent: ''
        };
    }


    render(){
        var allUserStock=this.props.userList;
        if(this.props.userList){
            return (
                <div className="weather__value" >
                {allUserStock.map((stock, index) => {
                    return (
                        <StockAdapter selectedStockParent={this.selectedStockChild}
                        stockData={stock}
                        key={stock.symbol} stockSymbol={stock.symbol} companyName={stock.companyName} 
                        
                        />
                    )
                })}
                </div>
            )
       
     
    
          }
    }
    
};
export default UserStocks;