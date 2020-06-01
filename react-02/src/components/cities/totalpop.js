import React from 'react'
import { ThemeContext } from '../theme/ThemeContext';

function getPopulation(cities) {
    const pop = [];
    for (const popCount in cities) {
        pop.push(Number(cities[popCount].population));
    }
    return pop.reduce((a, b) => a + b, 0);
}

const TotalPop = ({ cities }) => {
    return (
        <ThemeContext.Consumer>{(context) => {
            const { isLightTheme, light, dark, toggleTheme } = context;
            const theme = isLightTheme ? light : dark;

            return (
                <div id="totalPopDiv" className="divBox" style={{ background: theme.bg }}>
                    <div><strong>Total Population:</strong> {getPopulation(cities)}</div>
                </div>
            )
        }}
        </ThemeContext.Consumer>

    )

}

export default TotalPop