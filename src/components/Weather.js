import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "react-bootstrap";

import React from "react";

function  getWeatherIcon (condition) {
    if (condition < -16.1111) {
      return '🌩';
    } else if (condition < 4.44444) {
      return '🌧';
    } else if (condition < 16) {
      return '☔️';
    } else if (condition < 21.1111) {
      return '☃️';
    } else if (condition < 26.6667) {
      return '🌫';
    } else if (condition == 26.6667) {
      return '☀️';
    } else if (condition <= 28.8889) {
      return '☁️';
    } 
    else if(condition <=37){
        return '☀🌞😎';
    }
    else {
      return '🤷‍';
    }
  }
  let urlImg=`https://www.weatherbit.io/static/img/icons/`;

class Weather extends React.Component {
    render() {
   
        return (
            <div className="cardcontainer">

                {this.props.showWeather &&

                  <Card style={{
                        'width': '80%', 'margin-top': '50px', 'margin-bottom': "50px", background: '#000000', background: '-webkit-linear-gradient(to bottom, #434343, #000000)',
                        background: 'linear-gradient(to bottom, #434343, #000000)', boxShadow: '2px 2px 2px black', color: 'white'
                    }} >



                        <Card.Body>
                            <Card.Title>Weather for :{this.props.cityInformation}</Card.Title>
                            
                             {this.props.WeatherInformation.map( element =>
                             <Card.Text>
                          
                                           {element.date} {element.description}
                                     
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