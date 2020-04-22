import React from 'react';

class EvenComponent extends React.Component {
    render() {
        if (this.props.counter%2>0) {
            return (null)
        } else {
            return (
                <div>
                    Even!
                </div>
            )
        }
}
}

export default EvenComponent;