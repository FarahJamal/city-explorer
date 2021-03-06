import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';


class ErrorModal extends React.Component {


  
     

render() {
    return (
<>
<Modal show={this.props.showErr} onHide={this.props.hideErr}>
        <Modal.Header closeButton>
        <Image style={{'width':'100px'}} src={'https://getillustrations.com/packs/scarlet-surrealism-illustrations/scenes/_1x/404,%20error%20_%20warning,%20danger,%20alert,%20map,%20location,%20travel_md.png'}/>
          <Modal.Title style={{'color': 'red'}}>ERROR!</Modal.Title>
        </Modal.Header>

        <Modal.Body>{this.props.statusErrMsg} with status code #{this.props.statusCode}</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={this.props.hideErr} >
            OK!
          </Button>
          
        </Modal.Footer>
      </Modal>
</>
    );
}
}

export default ErrorModal;