import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "react-bootstrap";
import { Pie, Doughnut } from 'react-chartjs-2';

import React from "react";

class Covid extends React.Component {

    render() {
        let chartData;
        if (this.props.showCovid) {
            chartData = {
                labels: ['cases', 'deaths', 'active'],
                datasets: [
                    {
                        label: 'covid Information',
                        data: [
                            this.props.countryCode[0].cases,
                            this.props.countryCode[0].deaths,
                            this.props.countryCode[0].active,

                        ],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',

                        ]
                    }
                ]
            }

        }
        else {
            chartData = {}
        }
        return (
            <div className="cardcontainer">

                {this.props.showCovid &&


                    <Card style={{
                        'width': '80%', 'margin-top': '50px', 'margin-bottom': "50px", background: '#000000', background: '-webkit-linear-gradient(to bottom, #434343, #000000)',
                        background: 'linear-gradient(to bottom, #434343, #000000)', boxShadow: '2px 2px 2px black', color: 'white'
                    }} >

<Card.Body>
<Card.Header>
   COVID-19 information for {this.props.countryCode[0].country}
</Card.Header>
<Card.Text>
    {this.props.countryCode[0].continent}
</Card.Text>
<div style={{width: '20em',height:''}}>

                        <Pie style={{
    }}
                            data={chartData}
                            options={{
                                title: {
                                    display: true,
                                    text: 'Average Rainfall per month',
                                    fontSize: 20
                                },
                                legend: {
                                    display: true,
                                    position: 'right'
                                }
                            }}
                        />
                        </div>

                       
                        </Card.Body>
                    </Card>
               
                       
                }


            </div>
        )
    }



}

export default Covid;