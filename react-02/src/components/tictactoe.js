import React from 'react'

function calculateWinner(squares) {
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a,b,c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    if (squares.indexOf(null) === -1) {
        return 'Tie'
    }
    return null;
}

// Disables all squares:
// function disableSquares() {
//   const dis = document.getElementsByClassName("square");
//   let t;
//   for (t=0; t<dis.length; t++) {
//     dis[t].disabled = true;
//   }
// }
// Enables all squares
// function enableSquares() {
//   const dis = document.getElementsByClassName("square");
//   let t;
//   for (t=0; t<dis.length; t++) {
//     dis[t].disabled = false;
//   }
// }

function Square(props) {
  if (props.humanTurn===null) {
    return (
      <button id={props.index} className="square" >
          {props.value}
      </button>
    )
  } else {
      return (
        <button id={props.index} className="square" onClick={props.onClick} >
            {props.value}
        </button>
      )
    };
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
  if (result !== null) {
    // console.log('result: ', result)
    return myState.scores[result];
  }
  if (isMaximizing) {
    let bestScore = -Infinity;
    let k;
    for (k = 0; k < 10; k++) {
      // Is the spot available?
      if (board[k]===null) {
        board[k]=myState.ai;
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
      if (board[m]===null) {
        board[m]=myState.human;
        let score = minimax(board, depth + 1, true, myState);
        board[m] = null;
        bestScore = Math.min(score, bestScore)
      }
    }
    return bestScore;
  }
}

const bestMove = (board, myState) => { // board state , this.state
  let bestScore = -Infinity;
  let move;
  let j;
  for (j = 0; j < 9; j++) {
    if (board[j] === null) {
      board[j] = myState.ai;
      let score = minimax(board, 0, false, myState); //false
      board[j] = null;
      if (score > bestScore) {
        bestScore = score;
        move = j;
      }
    }
  }
  const randomNumber = Math.floor((Math.random() * 5));
  if (randomNumber===0) {
    let t;
    for (t=0;t<9;t++) {
      if (board[t]===null) {
        return t;
      }
    }
  }
  
  return move;
}


// function handleClick(i, historyState, xIsNext, stepState, clickSetState) {
//   const history = historyState.slice(0, stepState + 1);
//   const current = history[history.length - 1];
//   const squares = current.squares.slice();
//   if (calculateWinner(squares) || squares[i]) {
//       return;
//   }
//   squares[i] = xIsNext ? 'X' : 'O';
//   Tictactoe.clickSetState(history, squares);
// }


class Tictactoe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
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
      
    handleClick(i) {
      console.log('handleClick triggered')
      const history = this.state.history.slice(0, this.state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      if (calculateWinner(squares) || squares[i]) {
          return;
      }
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      this.clickSetState(history, squares);
    }
    
    clickSetState(history, squares) {
      this.setState({
        history: history.concat([{
            squares: squares,
        }]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext,
        humanTurn: !this.state.humanTurn,
      });
    }
      


    jumpTo(step) {
      this.setState({
          stepNumber: step,
          xIsNext: (step % 2) === 0,
      })
    }

    // bestMove(board) { // board state , this.state
    //   let bestScore = -Infinity;
    //   let move;
    //   let j;
    //   for (j = 0; j < 9; j++) {
    //     if (board[j] === null) {
    //       board[j] = this.state.ai;
    //       let score = minimax(board, 0, false, this.state); //false
    //       board[j] = null;
    //       if (score > bestScore) {
    //         bestScore = score;
    //         move = j;
    //       }
    //     }
    //   }
    //   const randomNumber = Math.floor((Math.random() * 5));
    //   console.log('randomNumber: ', randomNumber);
    //   if (randomNumber===0) {
    //   }
  
    //   return move;
    // }

    nextTurn(board) { 
      const squares = board.squares.slice();
      var theMove = bestMove(squares, this.state);
      this.handleClick(theMove);
    }

    // async nextTurn(board) { 
    //   disableSquares();
    //   await new Promise(r => setTimeout(r, 250));
    //   enableSquares();
    //   const squares = board.squares.slice();
    //   var theMove = bestMove(squares, this.state);
    //   this.handleClick(theMove);
    // }

    pickStart() {
      // disableSquares();
      return(
        <div>
          Starting Player:<br></br>
        <button
          onClick={() => {
            this.setState ({
              humanTurn: true,
            })
          }}>Squishy</button>
        <button
          onClick={() => {
            // console.log('in robot start.');
            this.setState ({
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

  getChooseStatus() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const humanTurn = this.state.humanTurn;
    let status, choose, status2
    
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      if (humanTurn===null) {
        choose = this.pickStart();
      } else {
        if (humanTurn===false) {

          this.nextTurn(current)
        }
        status = 'Squishy: ' + this.state.human
        status2 = 'Robot: ' + this.state.ai
      }
    }
    console.log('in getChooseStatus')
    return [status, choose,status2]
  }
    
  render() {
    // let status, choose, status2
    const [status, choose, status2] = this.getChooseStatus()
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    // const winner = calculateWinner(current.squares);
    // const humanTurn = this.state.humanTurn;
    // if (winner) {
    //   status = 'Winner: ' + winner;
    // } else {
    //   if (humanTurn===null) {
    //     choose = this.pickStart();
    //   } else {
    //     if (humanTurn===false) {

    //       this.nextTurn(current)
    //     }
    //     status = 'Squishy: ' + this.state.human
    //     status2 = 'Robot: ' + this.state.ai
    //   }
    // }
   
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            // onClick={(i) => this.handleClick(i)}
            onClick={this.handleClick.bind(this)}
            humanTurn={this.state.humanTurn}/>
        </div>
        <div className="game-info">
        <div>{choose}</div>
        <div>{status}</div>
        <div>{status2}</div>
        </div>
      </div>
    );
  }
}

// ========================================


export default Tictactoe;

