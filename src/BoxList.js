import React, { Component } from 'react';
import Box from './Box'
// import { findAllByPlaceholderText } from '@testing-library/react';
import NewBoxForm from './NewBoxForm'
class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = { boxes: [{ width: '', height: '', color: "" }] }
        this.create = this.create.bind(this);
    }
    create(newBox) {
        this.setState({
            boxes:[...this.state.boxes,newBox]
        });
    }
    render() {
        const boxses = this.state.boxes.map(box =>
            <Box width={box.width} height={box.height} color={box.color} />
        )
        return (
            <div>
                <h1>Color box maker Thing</h1>
                <NewBoxForm createBox={this.create} />
                {boxses}
            </div>
        )
    }
}

export default BoxList;