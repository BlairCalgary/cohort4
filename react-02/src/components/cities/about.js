import React from 'react'

function aboutAlert() {
    console.log('aboutalert')
    alert(
        "Cities and Communities\n"+
        "1. City names are unique.\n"+
        "2. Cities only require a name.\n"+
        "Future enchancements:\n"+
        "1. Load button to load sample data.\n"+
        "2. Require lat/long on creation.\n"
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