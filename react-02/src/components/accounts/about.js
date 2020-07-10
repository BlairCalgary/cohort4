import React from 'react'

function aboutAlert() {
    console.log('aboutalert')
    alert(
        "Accounts\n"+
        "1. User can open account with valid name.\n"+
        "2. Only accounts with no balance can be closed.\n"+
        "3. Minimum number of accounts is 1.\n"+
        "4. User can make withdrawals and deposits.\n\n"+
        "Future enchancements:\n"+
        "1. Create class for accounts that are pushed into controller.\n"+
        "2. Transfer funds between accounts.\n"+
        "3. Multiple bank account holders.\n"+
        "4. rename selectedindex, rename 'key'. "
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