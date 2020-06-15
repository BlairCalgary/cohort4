import React, {useState,useEffect,Fragment} from 'react';



function API () {
    const [display, setDisplay] = useState([<h3>test</h3>])
    const loadJSON = async () => {
        const url = 'http://127.0.0.1:5000/datadump'
        const data = await fetch(url)
        const response = await data.json()
        let currDisplay = [];
        for (let key of Object.entries(response)) {
            console.log('top level:', key[0])      
            let line = <dl>{key[0]}</dl>;
            currDisplay.push(line)
            console.log('next level:', key[1])      
            for (let item of Object.entries(key[1])) {
                console.log('item:', item[0])
                let line = <dt>{item[0]}:</dt>;
                currDisplay.push(line)
                for (let atom of Object.entries(item[1])) {
                    console.log('atom:', atom[0],atom[1])
                    let line = <dd>{atom[0]}: {atom[1]}</dd>;
                    currDisplay.push(line)   
                }
            }
            
            
        }
        console.log(currDisplay)
        setDisplay(currDisplay)
        // let display = response.map((element, index) => {
        
        //         <li key={index}>{element.customer}</li>
            
        // })
        // setDisplay(display)
        
    }
    return (
        <div>
            <button onClick={() => loadJSON()}>Load JSON data from flask API</button>
            {display}
        </div>
    )
}

export default API;

