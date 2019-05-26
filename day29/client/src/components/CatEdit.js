import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { 
  Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input
} from 'reactstrap';

class CatEdit extends Component {
  constructor(props) {
    super(props);
    this.state= {
      modal: false,
      cat: {}
    };

    this.toggle = this.toggle.bind(this);
    this.save = this.save.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.setState({
      modal: this.props.modal,
      cat: this.props.catEdit
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      modal: nextProps.modal,
    });
  }

  toggle() {
    this.props.toggleModal(!this.state.modal);
  }

  save() {
    this.props.toggleModal(!this.state.modal);

    const { cat } = this.state;
    this.props.editCat(cat);
  }

  handleChange(event) {
    const { name, value } = event.target;
    const { cat } = this.state;
    const newCat = {...cat};
    newCat[name] = value;

    this.setState(
      {
        [name]: value,
        cat: newCat
      }
    );
  }

  render() {
    const { cat } = this.state;
    const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader className='text-primary' toggle={this.toggle} close={closeBtn}>Edit Cat</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input type="text" name="name" id="name" value={cat.name} placeholder="Enter cat name..." onChange={this.handleChange} />
              </FormGroup>
              <FormGroup>
                <Label for="color">Color</Label>
                <Input type="text" name="color" id="color" value={cat.color} placeholder="Enter cat color..." onChange={this.handleChange} />
              </FormGroup>
              <FormGroup>
                <Label for="image">Image</Label>
                <Input type="text" name="image" id="image" value={cat.image} placeholder="Enter cat image..." onChange={this.handleChange} />
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

CatEdit.propTypes = {
  modal: PropTypes.bool,
  cat: PropTypes.shape({
		name: PropTypes.string,
		color: PropTypes.string,
		image: PropTypes.string
	})
};

export default CatEdit;