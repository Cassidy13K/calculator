import React, { Component } from "react";
import Numbers from "./numbers";

class Calculator extends Component {
	constructor(props) {
		super(props);
		this.state = {
			input1: "",
			input2: "",
			result: "",
			method: "",
		};
	}
        
	add() {
		this.setState({
			result: Number(this.state.input1) + Number(this.state.input2),
			method: "+"
		});}

	subtract() {
		this.setState({
			result: Number(this.state.input1) - Number(this.state.input2),
			method: "-"
		});}

	multiply() {
		this.setState({
			result: Number(this.state.input1) * Number(this.state.input2),
			method: "*"
		});}

	divide() {
		this.setState({
			result: Number(this.state.input1) / Number(this.state.input2),
			method: "/"
		});}

	sum() {
		this.setState({
			//result: (Number(this.state.input1) this.state.method Number(this.state.input2))
		});}

	clear() {
		this.setState({
			input1: "",
			input2: "",
			result: "",
			method: ""      
		});}
    

	/* THIS CODE CHECK FOR EMPTY IMPUT AND DELETES INPUT2 & METHOD TO OVERWRITE WHEN CONTINUING CALCULATION
    number() {
        if (this.state.input1 == ""){  // if input1 ="" make onclick event paste number x into input1
            console.log("input1 was empty")
            this.setState({input1: "0"})         
        }

        /*else if (this.state.input2 == ""){ // else if input2 ="" paste x into input2
            console.log("input2 was empty")
            this.setState({input2: "0"})     
        }
            
        else { // else call method() and put result into input1, x into input2
            console.log("none were empty")
            this.setState({
                input2: "", 
                method: ""})  
            sum()
            this.state.input1 = this.state.sum    
        }
    }*/
    

	// create a button with onclick event
	// make button text = x
	// if input1 ="" make onclick event paste number x into input1
	// else if input2 ="" paste x into input2
	// else call method() and put result into input1, x into input2
	


	render () {
		       

		return (
			<div>
				<div className="number-input">
					<input type="text" onChange ={event => this.setState({input1: event.target.value})} className="b" placeholder="type your first number here"></input>
					<input type="text" onChange ={event => this.setState({input2: event.target.value})} className="a" placeholder="type your second number here"></input>
					
				</div>

				<div className="method-input">
					<button className="add" onClick={() => this.add()}>+</button>
					<button className="subtract" onClick={() => this.subtract()}>-</button>
					<button className="multiply" onClick={() => this.multiply()}>*</button>
					<button className="divide" onClick={() => this.divide()}>/</button>
					<button className="result" onClick={() => this.sum()}>=</button>

					<button className="clear" onClick={() => this.clear()}>CLEAR</button>
				</div>
                
				<div className="output">                    
					<p className="input">calculation: {this.state.input1} {this.state.method} {this.state.input2}</p>                    
					<p className="result">YOUR RESULT IS: {this.state.result}</p>
				</div>                
			</div>

		);
	}
}


export default Calculator;