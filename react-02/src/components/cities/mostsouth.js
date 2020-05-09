import React from 'react'

function getMostSouthern(cities) {
    let most = 0;
    for (const lat in cities) {
        if (lat===0) {
            most = lat
        }
        if (cities[lat].latitude<cities[most].latitude) {
            most = lat
        }
    }
    if (cities[most]) {
        return cities[most].name;
    }
        
}


class MostSouth extends React.Component {
    render() {
        return(
            <div id="mostSouthDiv" className="divBox">
                <div><strong>Most Southern:</strong> {getMostSouthern(this.props.cities)}</div>
            </div>
        )
    }
}

export default MostSouth