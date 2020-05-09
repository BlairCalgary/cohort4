import React from 'react'

function getPopulation(cities) {
    const pop = [];
    for (const popCount in cities) {
        pop.push(Number(cities[popCount].population));
    }
    return pop.reduce((a, b) => a + b, 0);
}

const TotalPop = ({cities}) => {
    return(
        <div id="totalPopDiv" className="divBox">
            <div><strong>Total Population:</strong> {getPopulation(cities)}</div>
        </div>
    )
}

export default TotalPop