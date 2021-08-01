import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import React from "react";
import '../App.css'
import axios from "axios";
import Data from './Data';


const API_KEY = process.env.REACT_APP_API_KEY;
console.log("Key is", API_KEY);


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: '',
            lon: '',
            display_name: '',
            class: '',
            type: '',
            show: false
        }
    }

    getLocationData = async (event) => {
        event.preventDefault();
        let cityName = event.target.city.value;
        event.target.city.value = '';
        console.log(cityName);
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

    }

  
    render() {
        return (
            <>
                <Form className="form" onSubmit={this.getLocationData} >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Enter city name" name='city' />

                    </Form.Group>
                    <center>
                        <Button variant="dark" type="submit" className="btn" >
                            Explore!
                        </Button>
                    </center>

                </Form>

                <Data
                    lon={this.state.lon}
                    lat={this.state.lat}
                    display_name={this.state.display_name}
                    class={this.state.class}
                    type={this.state.type}
                    show={this.state.show}

                />
                {

                }
            </>
        );
    }
}

export default Main;