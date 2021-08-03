import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "react-bootstrap";

import React from "react";
class Weather extends React.Component {
    render() {
        return (
            <div className="cardcontainer">
                {this.props.showWeather &&
                    <Card style={{
                        'width':'1080px','margin-top':'50px','margin-bottom':"50px", background: '#000000', background: '-webkit-linear-gradient(to bottom, #434343, #000000)',
                        background: 'linear-gradient(to bottom, #434343, #000000)', boxShadow: '2px 2px 2px black',color:'white'
                    }} >



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