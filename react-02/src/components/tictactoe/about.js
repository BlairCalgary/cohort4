import React from 'react'

function aboutAlert() {
    console.log('aboutalert')
    alert(
        "TicTacToe\n"+
        "1. User selects if they or the AI robot starts first.\n"+
        "2. The AI robot uses a minimax algorithm to select its move.\n"+
        "3. The AI robot has a 20% change of choosing the next available empty square.\n"+
        "4. End condition is three in a row, or a tie if there is no winner.\n\n"+
        "Future enchancements:\n"+
        "1. Option to play again.\n"+
        "2. Play-by-play history of game.\n"+
        "3. Styling and apply display theme change.\n"
    )
}

function About () {
    return(
        <div>
            <button onClick={aboutAlert}>
                About
            </button>
        </div>
    )
}

export default About;