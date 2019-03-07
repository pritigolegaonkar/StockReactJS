# StockReactJS

A web based application using ReactJs and Nodejs(npm) which fetches live data of stock rates from a API.
I have used the following API to display the stock data:
https://api.iextrading.com/1.0/ref-data/symbols
https://api.iextrading.com/1.0/stock/"+ selected_symbol+"/quote?displayPercent=true"

This application is a live update of the stock rates and increase/decrease of the stock prices. The data is fetched from the Internet using REST API services in JSON format. The user can add the stock value using the add button by its name or company name to give all the other details(decrease percent,stock value,company name,color)in the view. It does not allow duplicate stock values as prompts the alert box
Enhancements:
Adding a NoSQL database like MongoDB to save the stock details in the in the database for users.
Adding the authorized login functionality for different user
