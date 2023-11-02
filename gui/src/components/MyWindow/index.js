import React, { Component } from "react"

export default class MyWindow extends Component {
	render() {
		return (
			<div class="title-bar">
				<div class="title-bar-text">A Title Bar</div>
				<div class="title-bar-controls">
					<button aria-label="Close"></button>
				</div>
			</div>
		);
	}
}