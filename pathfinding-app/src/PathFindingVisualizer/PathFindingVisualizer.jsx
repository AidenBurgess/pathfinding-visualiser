import React, { Component } from "react";
import Node from "./Node/Node";
import "./PathFindingVisualizer.css";

export default class PathFindingVisualizer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nodes: [],
		};
	}

	componentDidMount() {
		const nodes = [];
		for (let row = 0; row < 20; row++) {
			const currentRow = [];
			for (let col = 0; col < 50; col++) {
				currentRow.push([]);
			}
			nodes.push([currentRow]);
		}
		this.setState({ nodes });
	}

	render() {
		return (
			<div className="grid">
				{this.state.nodes.map((row, rowIdx) => {
					return (
						<div key={rowIdx}>
							{row.map((node, nodeIdx) => (
								<Node key={nodeIdx}></Node>
							))}
						</div>
					);
				})}
			</div>
		);
	}
}
