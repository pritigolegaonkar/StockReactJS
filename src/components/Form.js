import React from "react";

const Form = props => (
	<form onSubmit={props.getStocks}>
		<input type="text" width="300px" name="symbol" placeholder="Enter Stock Symbol..."/>
		<button>Find Stock</button>
	</form>
);

export default Form;