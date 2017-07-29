import React, { Component } from "react";

class Numbers extends Component {

	repeat (n) {
		return (
			Array.from(Array(n)).map((v, i ) => i)
		);					
	}

	createButton (n) { 
		return (
			<button 
				key={n} 
				className={`number button_${n}`} 
				onClick={() => this.NumberClick(n)} 			
			>
				{n}
			</button>)
		; 
	}

	NumberClick (n) {
		console.log(`button with number ${n} was pressed`);
		if (props.state.method == "") {
			if (props.state.method1 == "") {
				props.setState ({input1: "n"});
			}
			else {props.setState ({input1: props.state.input1+"n"});
			}
		}
		else if (props.state.method !== "") {
			props.setState ({input2: props.state.input2+"n"});
		}
		else {console.log("Error: NumberClick function cannot read state 'method'.");}
	}

	render () {
		return (
			<div className ="numbers">
				{this.repeat(10).map(n => this.createButton(n))}
			</div>
		);
	}
}

export default Numbers;