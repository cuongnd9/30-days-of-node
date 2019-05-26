import React from 'react';
import PropTypes from 'prop-types';
import { 
  Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input
} from 'reactstrap';

class CatCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false    
    };

    this.toggle = this.toggle.bind(this);
    this.save = this.save.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.setState({
      modal: this.props.modal
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      modal: nextProps.modal
    });
  }

  toggle() {
    this.props.toggleModal(!this.state.modal);
  }

  save() {
    this.props.toggleModal(!this.state.modal);

    const { name, color, image } = this.state;
    const cat = { name, color, image };
    this.props.createCat(cat);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState(
      {
        [name]: value
      }
    );
  }

  render() {
    const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader className='text-primary' toggle={this.toggle} close={closeBtn}>New Cat</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input type="text" name="name" id="name" placeholder="Enter cat name..." onChange={this.handleChange} />
              </FormGroup>
              <FormGroup>
                <Label for="color">Color</Label>
                <Input type="text" name="color" id="color" placeholder="Enter cat color..." onChange={this.handleChange} />
              </FormGroup>
              <FormGroup>
                <Label for="image">Image</Label>
                <Input type="text" name="image" id="image" placeholder="Enter cat image..." onChange={this.handleChange} />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={this.save}>Save</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

CatCreate.propTypes = {
  modal: PropTypes.bool
};

export default CatCreate;