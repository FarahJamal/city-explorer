import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Card } from "react-bootstrap";



class Data extends React.Component {


render(){
  const validForm = this.props.show;
  let form;
  if (validForm) {
    form = ( 
      <Card style={{
        'width': '80%', 'margin-top': '50px', 'margin-bottom': "50px", background: '#000000', background: '-webkit-linear-gradient(to bottom, #434343, #000000)',
        background: 'linear-gradient(to bottom, #434343, #000000)', boxShadow: '2px 2px 2px black', color: 'white'
    }} >
      <Card.Header>{this.props.type}</Card.Header>
          <Card.Body>
            <Card.Title>{this.props.display_name}</Card.Title>
            <Card.Text>
             lat:{Math.floor(this.props.lat)}<br/>
             lon:{Math.floor(this.props.lon)}<br/>
             class:{this.props.class}<br/>
            </Card.Text>
          </Card.Body>


        </Card>

        );
  } else {
    form = (<div></div>);
  }
  return (
    <>
    {form}
    </>);

  
}
}
export default Data;