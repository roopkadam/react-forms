import React, { Component } from 'react';
import './Box.css';

class Box extends Component {
    render() {
        return (
            <div>
            <div style={{
                width: `${this.props.width}em`,
                height:`${this.props.width}em`,
                backgroundColor: this.props.color
            }} >
            </div>
            <button>X</button>
            </div>
        )
    }
}

export default Box;