import React from 'react';

function Square (props) {
    return (
        <button id={props.index} className="square">
            {props.value}
        </button>
    )
}

class Board extends React.Component {
//     var newarray = numbers.map(myFunction)

// function myFunction(num) {
//   return num * 10;
// }
// const newboard = board.map()
    renderSquare(i) {
        return (
            <Square
            value={this.props.board[i]}
            
            // onClick={() => this.props.onClick(i)}

            // humanTurn={this.props.humanTurn}
            index={i}
            />
        )
    }

    render() {
        return (
            <div>
            <div className="board-row">
              {this.renderSquare(0)}
              {this.renderSquare(1)}
              {this.renderSquare(2)}
            </div>
            <div className="board-row">
              {this.renderSquare(3)}
              {this.renderSquare(4)}
              {this.renderSquare(5)}
            </div>
            <div className="board-row">
              {this.renderSquare(6)}
              {this.renderSquare(7)}
              {this.renderSquare(8)}
            </div>
          </div>
        )
    }
}

class Knotscross extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            board: [null,null,null,null,null,null,null,null,null] }
        this.player1 = {
            type: 'human',
            xo: 'X'
        }
        this.player2 = {
            type: 'ai',
            xo: 'O'
        }
        this.nextTurn = null
    }
    handleClick() {

    }

    render() {
        return (
            <div>
                <Board board={this.state.board}/>
            </div>
        )
    }
}

export default Knotscross

