import { Excalidraw } from "@excalidraw/excalidraw";
import React, { Component } from 'react';

class ExcalidrawPage extends Component {


	render() {
    return (
			<>
      <h1 style={{ textAlign: "center" }}>Excalidraw Example</h1>
      <div style={{ height: "500px" }}>
        <Excalidraw />
      </div>
    </>
		)
	}
}

export default ExcalidrawPage;