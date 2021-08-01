import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Card } from "react-bootstrap";



class Data extends React.Component {


render(){
  const validForm = this.props.show;
  let form;
  if (validForm) {
    form = ( 
        <Card show={false}  style={{'width':'1080px','margin-top':'50px'}}>
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