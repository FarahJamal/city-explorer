import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "react-bootstrap";

import React from "react";
class Weather extends React.Component {
    render() {
        return (
            <div className="cardcontainer">
                {this.props.showWeather &&
                    <Card style={{ width: '28rem', backgroundColor: '#b0ceff', boxShadow: '2px 2px 2px black' }} >

                        <Card.Body>
                            <Card.Title>Weather for : {this.props.cityInformation}</Card.Title>


                            {this.props.WeatherInformation.map(day =>
                               
                                    <Card.Text>
                                        {day.date} {' : '} {day.description}
                                    </Card.Text>
                                   
                               
                            )}
                        </Card.Body>
                    </Card>
                }

            </div>
        )
    }

    
    
}

export default Weather;