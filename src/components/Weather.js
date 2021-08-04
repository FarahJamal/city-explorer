import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "react-bootstrap";

import React from "react";

const  getWeatherIcon =(condition)=> {
    if (condition < 300) {
      return '🌩';
    } else if (condition < 400) {
      return '🌧';
    } else if (condition < 600) {
      return '☔️';
    } else if (condition < 700) {
      return '☃️';
    } else if (condition < 800) {
      return '🌫';
    } else if (condition == 800) {
      return '☀️';
    } else if (condition <= 804) {
      return '☁️';
    } else {
      return '🤷‍';
    }
  }
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
                            <Card.Title>Weather for :{this.props.cityInformation}</Card.Title>
                            
                             {this.props.WeatherInformation.map( element =>
                             <Card.Text>
                                
                                {element.valid_date} {' : '} {element.weather.description}{'with Low temp: '}{

                                 element.main.temp_min}{this.getWeatherIcon(element.main.temp_min)}
                                                {'  and max temp: '} {element.main.temp_max}                                          
                                        </Card.Text>                                
                                

                            )
                            
                            } 


                       
                        </Card.Body>
                    </Card>
                }

            </div>
        )
    }



}

export default Weather;