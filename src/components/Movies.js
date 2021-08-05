import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel'


import React from "react";


class Movies extends React.Component {
    render() {

        return (
            <div className="cardcontainer">

                {this.props.showMovies &&

                    <Carousel autoPlay infiniteLoop showThumbs={false}>


                        {this.props.moviesInfo.map((item) => (


                            <div>
                                <img src="https://image.tmdb.org/t/p/original/csE4ldFMH415Irm22kJCXd04wNL.jpg"/>
                            </div>
                        ))}
                    </Carousel>




                }

            </div>
        )
    }



}

export default Movies;