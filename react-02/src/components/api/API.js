import React, { useState } from 'react';

function API() {
    const [display, setDisplay] = useState([])
    const loadFromAws = async () => {
        const url = 'https://eamiq48yy0.execute-api.ca-central-1.amazonaws.com/dev/customer'
        const data = await fetch(url)
        const response = await data.json()
        const output = response.data
        const renderOut = []
        var counter=0;
        output.forEach(function (item) {
            Object.keys(item).forEach((key, index) => {
                counter++
                renderOut.push(<p key={counter}>{key}:{item[key]}</p>)
            })
            counter++
            renderOut.push(<p key={counter}>===</p>)
        });
        setDisplay(renderOut);
    }
    const loadJSON = async () => {
        const url = 'http://127.0.0.1:5001/datadump'
        let currDisplay = [];
        try {
            const data = await fetch(url)
            // console.log(data.status);
            const response = await data.json()

            // let currDisplay = [];
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
                        console.log('atom:', atom[0], atom[1])
                        let line = <dd>{atom[0]}: {atom[1]}</dd>;
                        currDisplay.push(line)
                    }
                }
            }
            throw new Error("error");
        } catch {
            console.log("catch");
            currDisplay.push(<p>No response from server.</p>)
        } finally {
            console.log(currDisplay)
            setDisplay(currDisplay)
        }
    }



    return (
        <div>
            <button onClick={() => loadJSON()}>Load JSON data from flask API</button><br/>
            <button onClick={() => loadFromAws()}>Send GET request to AWS serverless API</button>
            {display}
        </div>
    )
}

export default API;

