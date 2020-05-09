import React from 'react'

function settlement(pop) {
    if (pop>100000) { return 'City' };
    if (pop>20000) { return 'Large Town' };
    if (pop>1000) { return 'Town' };
    if (pop>100) { return 'Village' };
    return 'Hamlet';
}

const Cards = ({cities}) => {
    return (
        <div>
            {
                cities.map((user, i) => {
                    return (
                        <div key={cities[i].key} className="divBox Card">
                            <div>
                                <div className="leftCityCard">
                                    <strong>{cities[i].name}</strong>
                                    <button className="trash" />
                                </div>
                                <div>
                                    Settlement: {settlement(cities[i].population)}<br />
                                    Latitude: {cities[i].latitude}<br />
                                    Longitude: {cities[i].longitude}<br />
                                    Population: {cities[i].population}<br />
                                </div>
                            </div>
                            <div className="rightCityCard">
                                Migration:
                                <input id="moveInOut" type="number" className="moveInOut"></input>
                                <button className="smallbtn">Move In</button>
                                <button className="smallbtn">Move Out</button>
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
}


export default Cards