import 'bootstrap/dist/css/bootstrap.min.css';


import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import '../App.css'

class Movies extends React.Component {
    render() {

        return (
            <>
                {this.props.showMovies ? 

                    <Card style={{
                        'width': '80%', 'margin-top': '50px', 'margin-bottom': "50px", background: '#000000', background: '-webkit-linear-gradient(to bottom, #434343, #000000)',
                        background: 'linear-gradient(to bottom, #434343, #000000)', boxShadow: '2px 2px 2px black', color: 'white'
                    }} >
                        <Carousel style={{ width: '70%', margin: 'auto' ,'carousel-indicators':'none'}}
                        >
                            {this.props.moviesInfo.map(item => (

                                <Carousel.Item>
                                    <Card.Header style={{ 'font-size': '26px' }}>
                                        {item.title}
                                    </Card.Header>
                                    <Card.Text>{item.release_date}</Card.Text>
                                    <img
                                        className="d-block w-100"
                                        src={item.poster_path !== null ? 'https://image.tmdb.org/t/p/original/' + (item.poster_path).split('/')[1] : 'https://sd.keepcalms.com/i-w600/keep-calm-poster-not-found.jpg'}
                                        alt={item.title}
                                        style={{ height: '500px' }}
                                    />
                                    <Card.Footer style={{'word-wrap': 'break-word'}}>
                                    {item.overview}


                                    </Card.Footer>
                                    <Card.Text>
                                        {item.vote_average}⭐
                                    </Card.Text>
                                   
                                </Carousel.Item>


                            ))}
                        </Carousel>






                    </Card>


                : <></>}


            </>
        )


    }

}

export default Movies;