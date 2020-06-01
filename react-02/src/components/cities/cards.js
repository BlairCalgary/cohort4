import React from 'react'
import { ThemeContext } from '../theme/ThemeContext';

function settlement(pop) {
    if (pop>100000) { return 'City' };
    if (pop>20000) { return 'Large Town' };
    if (pop>1000) { return 'Town' };
    if (pop>100) { return 'Village' };
    return 'Hamlet';
}
class Cards extends React.Component {

    delete(e) {
        // console.log('in cards.js delete')
        const city = e.target.parentElement.childNodes[0].textContent;
        this.props.deleteIt(city);
    }
    
    moveIn(e) {
        const city = e.target.parentElement.previousSibling.childNodes[0].textContent;
        const migration = e.target.previousSibling.value;
        this.props.moveInParent(city, migration);
    }

    moveOut(e) {
        const city = e.target.parentElement.previousSibling.childNodes[0].textContent;
        const migration = e.target.parentElement.childNodes[1].value;
        this.props.moveOutParent(city, migration);
        // console.log('in moveOut: ', city, migration);
    }
    render () {
        return(
            <ThemeContext.Consumer>{(context) => {
                const {isLightTheme,light,dark,toggleTheme} = context;
                const theme = isLightTheme ? light : dark;
                return (
            <div>
                {
                    this.props.cities.map((user, i) => {
                        
                        return (
                            <div className="divBox Card"  style={{background: theme.bg}} key={this.props.cities[i].key} >
                                <div>
                                    <div className="leftCityCard">
                                        <strong>{this.props.cities[i].name}</strong>
                                        <button className="trash"  onClick={(e) => this.delete(e)} />
                                    </div>
                                    <div>
                                        Settlement: {settlement(this.props.cities[i].population)}<br />
                                        Latitude: {this.props.cities[i].latitude}<br />
                                        Longitude: {this.props.cities[i].longitude}<br />
                                        Population: {this.props.cities[i].population}<br />
                                    </div>
                                </div>
                                <div className="rightCityCard">
                                    Migration:
                                    <input id="moveInOut" type="number" className="moveInOut"></input>
                                    <button className="smallbtn" onClick={(e) => this.moveIn(e)}>Move In</button>
                                    <button className="smallbtn" onClick={(e) => this.moveOut(e)}>Move Out</button>
                                </div>
                            </div>
                            // <Card
                            //     key={i}
                            //     id={robots[i].id}
                            //     name={robots[i].name}
                            //     email={robots[i].email}
                            // />
                        );
                    })
                }
            </div>
        )
    }}            
</ThemeContext.Consumer>

)
    }
}


export default Cards