import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


class ErrorModal extends React.Component {


  
     

render() {
    return (
<>
<Modal show={this.props.showErr} onHide={this.props.hideErr}>
        <Modal.Header closeButton>
          <Modal.Title style={{'color': 'red'}}>ERROR!</Modal.Title>
        </Modal.Header>
        <Modal.Body>{this.props.statusErrMsg} with status code #{this.props.statusCode}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.hideErr} >
            OK!
          </Button>
          
        </Modal.Footer>
      </Modal>
</>
    );
}
}

export default ErrorModal;