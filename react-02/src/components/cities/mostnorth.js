import React from 'react'
import { ThemeContext } from '../theme/ThemeContext';

function getMostNorthern(cities) {
    let most = 0;
    for (const lat in cities) {
        // console.log(cities[lat].name);
        if (lat === 0) {
            most = lat
        }
        if (cities[lat].latitude > cities[most].latitude) {
            most = lat
        }
    }
    if (cities[most]) {
        return cities[most].name
    }
}

class MostNorth extends React.Component {
    render() {
        return (
            <ThemeContext.Consumer>{(context) => {
                const { isLightTheme, light, dark} = context;
                const theme = isLightTheme ? light : dark;
                return (
                    <div id="mostNorthDiv" className="divBox" style={{ background: theme.bg }}>
                        <div><strong>Most Northern:</strong> {getMostNorthern(this.props.cities)} </div>
                    </div>
                )
            }}
            </ThemeContext.Consumer>

        )
    }
}

export default MostNorth