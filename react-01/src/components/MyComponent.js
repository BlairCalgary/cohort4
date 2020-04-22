import React from 'react';

class MyComp extends React.Component {
    render() {
        return (
            <div>
                <h3>Hello World from MyComp {this.props.whatToSay} {this.props.num}</h3>
                <button onClick={this.props.pushMe}>Push Me Too!</button>
            </div>
        )
    }
}

export default MyComp;