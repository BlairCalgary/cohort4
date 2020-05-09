import React from 'react'

class AddACity extends React.Component {
    render() {
        return(
            <div id="addCityDiv" className="divBox">
                <strong>Add a city:</strong><br/>
                Name:<input id="cityName"></input><br/>
                Latitude:<input id="lat"></input><br/>
                Longitude:<input id="long"></input><br/>
                Population:<input id="pop"></input><br/>
                <button id="cityAdd" className="btn">Add Above City</button>
                <button id="randomCity" className="btn">Random City</button>
            </div>
        )
    }
}

export default AddACity