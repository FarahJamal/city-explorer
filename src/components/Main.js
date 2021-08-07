import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import React from "react";
import '../App.css'
import axios from "axios";
import Data from './Data';
import ErrorModal from './ErrorModal';
import Weather from './Weather';
import Movies from './Movies';
import Covid from './Covid';


const API_KEY = process.env.REACT_APP_API_KEY;
const APP_SERVER = process.env.REACT_APP_SERVER;
const WEATHER_API = process.env.REACT_APP_API_KEY_WEATHER;
const PORT = 3001;
//console.log("Key is", API_KEY);


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: '',
            lon: '',
            display_name: '',
            class: '',
            type: '',
            show: false,
            showErr: false
        }
    }


    getLocationData = async (event) => {
        try {
            event.preventDefault();
            let cityName = event.target.city.value;
            event.target.city.value = '';
            //console.log(cityName);
            const URL = `https://us1.locationiq.com/v1/search.php?key=${API_KEY}&q=${cityName}&format=json`;
            let result = await (axios.get(URL));


            this.setState({
                lat: result.data[0].lat,
                lon: result.data[0].lon,
                display_name: result.data[0].display_name,
                class: result.data[0].class,
                type: result.data[0].type,
                show: true

            })

            let mapData = await axios.get(`https://maps.locationiq.com/v3/staticmap?key=${API_KEY}&center=${this.state.lat},${this.state.lon}
        &markers=icon:small-gray-cutout|${this.state.lat},${this.state.lon}`);

            this.setState({
                link: mapData.config.url,
            });

        }
        catch (e) {
            this.setState({
                showErr: true,
                statusCode: e.response.status,
                statusErrMsg: e.response.data.error,

            });


        };
        this.RenderWeather();
        this.RenderCovid();

        this.RenderMovies();
    }

    handleClose = () => {
        this.setState({
            showErr: false
        })
    }


    RenderWeather = async () => {
        try{
        //let cityNameW = this.state.display_name.split(',')[0];

        let latW = Number(this.state.lat).toFixed(2);
        let lonW = Number(this.state.lon).toFixed(2);

        // let weatherUrl = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${latW}&lon=${lonW}&key=${WEATHER_API}`;
        // `http://localhost:4444/weather?lat=${latW}&lon=${lonW}`
        let weatherUrl = `https://city-explorer-api-301d27.herokuapp.com/weather?lat=${latW}&lon=${lonW}`;
        //let weatherUrl = `http://localhost:4444/weather?lat=${latW}&lon=${lonW}`;
        //console.log(weatherUrl);
        let weatherData = await axios.get(weatherUrl)
        //console.log(weatherData);

        await this.setState({
            WeatherInformation: weatherData.data,
            showWeather: true,
        })

    }
           catch (e) {
            if (e.response && e.response.data) {
                await this.setState({
                    errorMessage: e.response && e.response.status + ': ' + e.response.data.error,
                    showMovies: false,

                })
                console.log('error');
                // console.log(this.state.moviesInfo[0].message); // some reason error message
            }
        }

    }

    RenderCovid = async () => {
try{
        let latW = Number(this.state.lat).toFixed(2);
        let lonW = Number(this.state.lon).toFixed(2);

        // let weatherUrl = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${latW}&lon=${lonW}&key=${WEATHER_API}`;
        // `http://localhost:4444/weather?lat=${latW}&lon=${lonW}`
        let covidUrl = `https://city-explorer-api-301d27.herokuapp.com/covid?lat=${latW}&lon=${lonW}`;
        //let covidUrl = `http://localhost:4444/covid?lat=${latW}&lon=${lonW}`;
        let covidData = await axios.get(covidUrl);
        
        await this.setState({
            covidInfo: covidData.data,

            showCovid:true,
        })
        console.log(covidData.data);
    }

    catch (e) {
        if (e.response && e.response.data) {
            await this.setState({
                errorMessage: e.response && e.response.status + ': ' + e.response.data.error,
                showMovies: false,

            })
            console.log('error');
            // console.log(this.state.moviesInfo[0].message); // some reason error message
        }
    }

    }
    RenderMovies = async () => {
        try {
            let cityName = this.state.display_name.split(',')[0];
            //`http://localhost:4444/movies?city=${cityName}` ||
            let moviesUrl = `https://city-explorer-api-301d27.herokuapp.com/movies?city=${cityName}`
            //let moviesUrl = `http://localhost:4444/movies?city=${cityName}`;
            let moviesData = await axios.get(moviesUrl);


            //console.log(moviesData.data);
            await this.setState({

                moviesInfo: moviesData.data,
                showMovies: true,
            })

        }
        catch (e) {
            if (e.response && e.response.data) {
                await this.setState({
                    errorMessage: e.response && e.response.status + ': ' + e.response.data.error,
                    showMovies: false,

                })
                console.log('error');
                // console.log(this.state.moviesInfo[0].message); // some reason error message
            }
        }

    }
    render() {
        const validImage = this.state.show;
        let image;
        let data;
        if (validImage) {
            image = (<Image style={{
                'width': '1080px', 'height': '400px', 'margin-bottom': '20px', background: '#000000', background: '-webkit-linear-gradient(to bottom, #434343, #000000)',
                background: 'linear-gradient(to bottom, #434343, #000000)', boxShadow: '2px 2px 2px black', color: 'white'
            }} src={this.state.link} thumbnail />
            );

            //call weather from weather.js

        }
        else {
            image = (<div></div>);
        }

        return (
            <>
                <Form className="form" onSubmit={this.getLocationData} >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Enter city name" name='city' style={{ 'text-align': 'center' }} />

                    </Form.Group>
                    <center>
                        <Button variant="dark" type="submit" className="btn" onClick={this.state.cityName}>
                            Explore!
                        </Button>
                    </center>

                </Form>
                <center>
                    <Data
                        lon={this.state.lon}
                        lat={this.state.lat}
                        display_name={this.state.display_name}
                        class={this.state.class}
                        type={this.state.type}
                        show={this.state.show}
                    />

                    <Covid

                        countryCode={this.state.covidInfo}
                        showCovid={this.state.showCovid}

                        renderCovid={this.RenderCovid}
                    />


                    <Weather
                        WeatherInformation={this.state.WeatherInformation}
                        showWeather={this.state.showWeather}
                        cityInformation={this.state.display_name}
                        renderWeather={this.RenderWeather}
                    />
                    <Movies
                        moviesInfo={this.state.moviesInfo}
                        showMovies={this.state.showMovies}
                        cityInformation={this.state.display_name}
                        renderMovies={this.RenderMovies}

                    />



                    {image}

                    <ErrorModal
                        showErr={this.state.showErr}
                        statusCode={this.state.statusCode}
                        statusErrMsg={this.state.statusErrMsg}
                        hideErr={this.handleClose}

                    />

                </center>

            </>
        );
    }
}

export default Main;


