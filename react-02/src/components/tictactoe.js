import React from 'react'

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  if (squares.indexOf(null) === -1) {
    return 'Tie'
  }
  return null;
}


function Square(props) {
  return (
    <button id={props.index} className="square" onClick={props.onClick} >
      {props.value}
    </button>
  )
}

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}

        onClick={() => this.props.onClick(i)}

        humanTurn={this.props.humanTurn}
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
    );
  }
}

function minimax(board, depth, isMaximizing, myState) { //board, depth, isMaximizing, state
  let result = calculateWinner(board);
  if (result) {
    return myState.scores[result];
  }
  if (isMaximizing) {
    let bestScore = -Infinity;
    let k;
    for (k = 0; k < 9; k++) {
      // Is the spot available?
      if (board[k] === null) {
        board[k] = myState.ai;
        let score = minimax(board, depth + 1, false, myState);
        board[k] = null;
        bestScore = Math.max(score, bestScore)
      }
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    let m;
    for (m = 0; m < 9; m++) {
      // Is the spot available?
      if (board[m] === null) {
        board[m] = myState.human;
        let score = minimax(board, depth + 1, true, myState);
        board[m] = null;
        bestScore = Math.min(score, bestScore)
      }
    }
    return bestScore;
  }
}

const bestMove = (board, myState) => { // board state , this.state
  
  const randomNumber = Math.floor((Math.random() * 5));
  console.log(randomNumber)
  if (randomNumber===0) {
    let t;
    for (t = 0; t < 9; t++) {
      if (board[t] === null) {
        console.log('returns: ', t)
        return t;
      }
    }
  } else {
    let bestScore = -Infinity;
    let move;
    let j;
    for (j = 0; j < 9; j++) {
      if (board[j] === null) {
        board[j] = myState.ai;
        let score = minimax(board, 0, !myState.xIsNext, myState); //false if robot goes first
        board[j] = null;
        if (score > bestScore) {
          bestScore = score;
          move = j;
        }
      }
    }
    console.log('returns: ', move)
    return move;
  }
  
}


class Tictactoe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        // squares: ['X','O',null,null,null,null,null,null,null],
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
      humanTurn: null,
      scores: {
        'X': -10,//-10
        'O': 10,//10
        'Tie': 0
      },
      ai: 'O',
      human: 'X',
    };
    this.handleClick = this.handleClick.bind(this)
  }


  doTheMove(squares, i, history) {
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
      humanTurn: !this.state.humanTurn,
    });
  }

  async handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    // const current = history[history.length - 1];
    // const squares = current.squares.slice();
    // const calcWinner = calculateWinner(squares)
    const squares = this.state.history[this.state.history.length-1].squares.slice()
    const calcWinner = calculateWinner(this.state.history[this.state.history.length-1].squares)
    if ((calcWinner) || squares[i]) {
      return;
    }
    console.log('board state before doTheMove: ', this.state.history[this.state.history.length-1].squares)
    await this.doTheMove(squares, i, history)
    
    const calcWinner2 = calculateWinner(this.state.history[this.state.history.length-1].squares)
    if (calcWinner2) {
      return;
    }
    await this.nextTurn()

  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    })
  }


  nextTurn() {
    const history = this.state.history;
    const board = history[history.length - 1];
    const squares = board.squares.slice();
    console.log('bestMove board: ', squares)
    var theMove = bestMove(squares, this.state);
    this.doTheMove(squares, theMove, history)
  }

  pickStart() {
    return (
      <div>
        Starting Player:<br></br>
        <button
          onClick={() => {
            this.setState({
              humanTurn: true,
            })
          }}>Squishy</button>
        <button
          onClick={() => {
            this.setState({
              humanTurn: false,
              ai: 'X',
              human: 'O',
              scores: {
                'X': 10,//-10
                'O': -10,//10
                'Tie': 0
              }
            })
          }}>Robot</button>
      </div>
    )
  }


  robotStart() {
    this.setState({
      humanTurn: false,
      ai: 'X',
      human: 'O',
      scores: {
        'X': 10,//-10
        'O': -10,//10
        'Tie': 0
      }
    })
    this.nextTurn()
  }

  squishyOrRobot() {
    let response;
    if (this.state.humanTurn === null) {
      response = 
        <div>
          Starting Player:<br></br>
          <button
            onClick={() => {
              this.setState({
                humanTurn: true,
              })
            }}>Squishy</button>
          <button
            onClick={() => this.robotStart()}
          >Robot</button>
        </div>
        
    } else {
      response = 
        <div>
          <div>Squishy: {this.state.human}</div>
          <div>Robot: {this.state.ai}</div>
        </div>
      
    }
    return response
  }
  
  winnerDisplay() {
    // const history = this.state.history;
    // const current = history[this.state.stepNumber];
    // const winner = calculateWinner(current.squares);

    const winner = calculateWinner(this.state.history[this.state.history.length-1].squares);

    let status = '';
    if (winner) {
      status = <div><br></br><div>Winner: {winner}</div></div>
    
    }
    return status
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const squishyRobot = this.squishyOrRobot()
    const winnerDisplay = this.winnerDisplay()
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={this.handleClick.bind(this)}
            humanTurn={this.state.humanTurn} />
        </div>
        <div className="game-info">
          <div>{squishyRobot}</div>
          <div>{winnerDisplay}</div>
        </div>
      </div>
    );
  }
}

export default Tictactoe;

