import React from 'react'

function aboutAlert() {
    console.log('aboutalert')
    alert(
        "UI Theme Toggle\n"+
        "1. Uses React ThemeContext to provide state to React App.\n"+
        "2. Light and Dark theme previews are displayed for preview.\n"+
        "3. Toggle Theme button toggles active display.\n"+
        "4. Toggle Theme button displays active theme.\n"+
        "Future enchancements:\n"+
        "1. Introduce user-generated theme(s)."
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