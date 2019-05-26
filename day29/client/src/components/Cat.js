import React, { Component } from 'react';
import { 
	Col, Card, CardImg, CardText, CardBody, CardTitle, Button 
} from 'reactstrap';
import { Link } from 'react-router-dom';

class Cat extends Component {
  handleEditCat() {
    this.props.editCat(this.props.children);
  }

  handleDeleteCat() {
    this.props.deleteCat(this.props.children);
  }

  render() {
    const { children: cat } = this.props;
    return (
      <Col className='mb-3' xs='6' sm='3'>
        <Card className='bg-light'>
          <CardImg top width="100%" src={cat.image} alt={cat.name} />
          <CardBody>
            <CardTitle className='text-warning display-4'>{cat.name}</CardTitle>
            <CardText className='text-success'>color: {cat.color}</CardText>
            <Link to={'/cats/' + cat._id}>
              <Button color='info' className='mr-2'>Detail</Button>
            </Link>
            <Button color='primary' className='mr-2' onClick={this.handleEditCat.bind(this)}>Edit</Button>
            <Button color='danger' onClick={this.handleDeleteCat.bind(this)}>Delete</Button>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default Cat;