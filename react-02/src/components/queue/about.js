import React from 'react'

function aboutAlert() {
    console.log('aboutalert')
    alert(
        "First In First Out and Last In First Out\n"+
        "1. Uses beer styles from BreweryDB.com.\n"+
        "2. FIFO/LIFO switch controls active queue.\n"+
        "3. Add and Delete buttons perform action on active queue.\n"+
        "4. To Be Added displays next item to be added to active queue.\n"+
        "5. Displays last deleted item.\n"+
        "Future enchancements:\n"+
        "1. Improve UI."
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