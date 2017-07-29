import React, { Component } from "react";
import Numbers from "./Numbers";

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
	
	MethodColor() { // TODO: changing background color doesn't work; should also revert back if nto method anymore
		if (this.state.method == "+") {
			document.getElementByClassName("add").style.backgroundColor = "blue";
		}
		else if (this.state.method == "-") {
			document.getElementByClassName("subtract").style.backgroundColor = "blue";
		}
		else if (this.state.method == "*") {
			document.getElementByClassName("multiply").style.backgroundColor = "blue";
		}
		else if (this.state.method == "/") {
			document.getElementByClassName("divide").style.backgroundColor = "blue";
		}
	}

	add() {
		if (this.state.input2 !== ""){  
			console.log("input2 was not empty");
			this.sum();
			this.setState({
				method: "+",
				input1: (this.state.result)
			});
		}
		else {
			this.setState({
				method: "+"
			});
		}
	}

	subtract() {
		if (this.state.input2 !== ""){  
			console.log("input2 was not empty");
			this.sum();
			this.setState({
				method: "-",
				input1: (this.state.result)
			});
		}
		else {
			this.setState({
				method: "-"
			});
		}
	}

	multiply() {
		if (this.state.input2 !== ""){  
			console.log("input2 was not empty");
			this.sum();
			this.setState({
				method: "*",
				input1: (this.state.result)
			});
		}
		else {
			this.setState({
				method: "*"
			});
		}
	}

	divide() {
		if (this.state.input2 !== ""){  
			console.log("input2 was not empty");
			this.sum();
			this.setState({
				method: "/",
				input1: (this.state.result)
			});
		}
		else {
			this.setState({
				method: "/"
			});
		}
	}

	sum() {
		switch (this.state.method) {		
		case "+":
			this.setState({result: (Number(this.state.input1) + Number(this.state.input2))});
			break;
		case "-":
			this.setState({result: (Number(this.state.input1) - Number(this.state.input2))});
			break;
		case "*":
			this.setState({result: (Number(this.state.input1) * Number(this.state.input2))});
			break;
		case "/":
			this.setState({result: (Number(this.state.input1) / Number(this.state.input2))});
			break;
		case "":
			this.setState({result: "Nothing was entered."});
			break;	
		default:
			this.setState({result: "Error: Cannot read value of state 'method'."});
		}
		console.log("posted result and reset input");
		this.setState({
			method: "",
			input1: "",
			input2: ""
		});
		
	}

	clear() {
		this.setState({
			input1: "",
			input2: "",
			result: "",
			method: ""      
		});
		console.log("reset everything");
	}

	render () {       
		return (
			<div className="calculator">
				<div className="input-buttons">
					<Numbers />
					{this.MethodColor}
					<div className="method-input">
						<button className="method-input add" onClick={() => this.add()}>+</button>
						<button className="method-input subtract" onClick={() => this.subtract()}>-</button>
						<button className="method-input multiply" onClick={() => this.multiply()}>*</button>
						<button className="method-input divide" onClick={() => this.divide()}>/</button>

						<button className="result" onClick={() => this.sum()}>=</button>

						<button className="clear" onClick={() => this.clear()}>CLEAR</button>
					</div>  
				</div>
				

				<div className="output">                    
					<p className="input">calculation: {this.state.input1} {this.state.method} {this.state.input2}</p>                    
					<p className="endresult">YOUR RESULT IS: {this.state.result}</p>
				</div>                                   
			</div>	

		);
	}
}


export default Calculator;
