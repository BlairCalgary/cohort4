import React from 'react'

function aboutAlert() {
    console.log('aboutalert')
    alert(
        "Linked List\n"+
        "1. Circular double linked list.\n"+
        "2. Does not rely on arrays or dictionaries.\n"+
        "3. Uses Jdenticon to generate visual icons.\n"+
        "4. Nodes are only aware of their neighbours.\n"+
        "5. Controller only tracks first, last, & active nodes.\n"+
        "6. Controller tracks total number and total strength.\n"+
        "7. User can add 3 predefined cards.\n"+
        "8. New card inserted after selected card.\n"+
        "Future enchancements:\n"+
        "1. Sort nodes functionality.\n"
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