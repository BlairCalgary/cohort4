import React from 'react'
import { ThemeContext } from '../theme/ThemeContext';

function getMostSouthern(cities) {
    let most = 0;
    for (const lat in cities) {
        if (lat === 0) {
            most = lat
        }
        if (cities[lat].latitude < cities[most].latitude) {
            most = lat
        }
    }
    if (cities[most]) {
        return cities[most].name;
    }

}


class MostSouth extends React.Component {
    render() {
        return (
            <ThemeContext.Consumer>{(context) => {
                const { isLightTheme, light, dark, toggleTheme } = context;
                const theme = isLightTheme ? light : dark;

                return (
                    <div id="mostSouthDiv" className="divBox" style={{ background: theme.bg }}>
                        <div><strong>Most Southern:</strong> {getMostSouthern(this.props.cities)}</div>
                    </div>
                )
            }}
            </ThemeContext.Consumer>

        )
    }
}

export default MostSouth