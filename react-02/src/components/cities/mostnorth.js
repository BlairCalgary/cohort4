import React from 'react'

function getMostNorthern(cities) {
    let most = 0;
    for (const lat in cities) {
        console.log(cities[lat].name);
        if (lat===0) {
            most = lat
        }
        if (cities[lat].latitude>cities[most].latitude) {
            most = lat
        }
    }
    if (cities[most]) {
        return cities[most].name
    }
}

class MostNorth extends React.Component {
    render() {
        return(
            <div id="mostNorthDiv" className="divBox">
                <div><strong>Most Northern:</strong> {getMostNorthern(this.props.cities)} </div>
            </div>
        )
    }
}

export default MostNorth