import React from "react";
import Form from "./components/Form";
import SearchStocks from './components/SearchStocks';
import UserStocks from './components/UserStocks';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={stockList:[],
      searchList:[],
      userList:[]};
    this.getStocks=this.getStocks.bind(this);
  }

  componentDidMount() {
    const fetchAllStocks=async() =>{
      const api_call=await fetch("https://api.iextrading.com/1.0/ref-data/symbols")
      const data_call=await api_call.json();
      this.setState({stockList: data_call});
    }
    fetchAllStocks();
  }

  getStocks = async (event) => {
    event.preventDefault()
    const searchSymbol=event.target.elements.symbol.value;
    const allStocks=this.state.stockList;
    //create a regex to get all the stock starting with search Symbol
    var regex = new RegExp('^'+searchSymbol+'.*$');
    var matchList=[];
    this.state.stockList.forEach(function(key,value){
      var sym =key.symbol;
      if(regex.test(sym)){
        matchList.push(key);
      }
    });  
    this.setState({ searchList: [] })
    //console.log(Object.assign({}, matchList))
    this.setState({
      searchList:matchList,
    }) 
  };

  selectedStock=async(data) =>{
    const api_call=await fetch("https://api.iextrading.com/1.0/stock/"+data+"/quote?displayPercent=true");
    const data_call=await api_call.json();
    var stock={
      "symbol":data_call.symbol,
      "companyName":data_call.companyName,
      "latestPrice":data_call.latestPrice,
      "change":data_call.change,
      "changePercent": data_call.changePercent
    }
    this.setState(prevState => ({
      userList: [...prevState.userList, stock]
    }));
  };

  render() {
    return (
        <div className="wrapper">
          <div className="main row container">
            <div className="col-sm-8">
                <div className="col-sm-12">
                  <Form getStocks={this.getStocks} />
                </div>
                <div className="col-sm-12 search_stock">
                  <UserStocks userList={this.state.userList}/>
              </div>  
            </div>
            <div className="col-sm-4 search_stock">
                <SearchStocks selectedParentStock1={this.selectedStock}
                searchList={this.state.searchList}/>
            </div> 
          </div>
        </div>
    );
  }
};

export default App;