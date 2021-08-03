import axios from "axios";

import React from "react";
import Main from "./Main";
class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state =
        {
            apiResponse: "",
            apiResponseDesc:""
        };
    }

  

    
    render() {
        console.log(this.props.date)

        return (

            <>
   
                <p>{console.log(this.props.date)}</p>
                <p>{this.props.desc}</p>
            </>
        );
    }
}

export default Weather;