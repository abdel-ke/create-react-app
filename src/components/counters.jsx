import React, { Component } from "react";
import Counter from "./counter";

class counters extends Component {
	state = {
		counters: [
			{ id: 1, value: 0 },
			{ id: 2, value: 0 },
			{ id: 3, value: 0 },
			{ id: 4, value: 0 },
		],
	};
	handleDelete = (counterId) => {
		// console.log("Event Handler Called", counterId);
		const counters = this.state.counters.filter(
			(c) => c.id !== counterId
		);
		this.setState({ counters });
	};
	handlReset = () => {
		const counters = this.state.counters.map(c => {
			c.value = 0;
			return c;
		});
		this.setState({ counters })
	}
	render() {
		return (
			<div>
				<button onClick={this.handlReset} className="btn btn-primary btn-sm m-2">
					Reset
				</button>
				{this.state.counters.map((counter) => (
					<Counter
						key={counter.id}
						onDelete={this.handleDelete}
						counter={counter}
					/>
				))}
			</div>
		);
	}
}

export default counters;
