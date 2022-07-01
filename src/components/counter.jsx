import React, { Component } from "react";

class Counter extends Component {
	state = {
		value: this.props.value,
	};

	handleIncrement = () => {
		this.setState({ value : this.state.value + 1 });
	};
	render() {
		return (
			<div>
				<span className={this.getBadgeClasses()}>
					{this.formaCounter()}
				</span>
				<button
					onClick={this.handleIncrement}
					className="btn btn-secondary btn-sm"
				>
					Increment
				</button>
			</div>
		);
	}
	formaCounter() {
		const { value: count } = this.state;
		return count === 0 ? "Zero" : count;
	}
	getBadgeClasses() {
		let classes = "badge m-2 badge-";
		classes += this.state.value === 0 ? "warning" : "primary";
		// console.log("|classes|", classes);
		return classes;
	}
}

export default Counter;
