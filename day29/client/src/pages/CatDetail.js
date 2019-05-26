import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import swal from '@sweetalert/with-react';
import { 
  Container, Card, CardImg, CardText, CardBody, CardTitle
} from 'reactstrap';

class CatDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cat: {}
    }
  }

  componentDidMount() {
    document.title = 'Cat Detail | Simple MERN Stack';
    
    const { catId } = this.props.match.params;
    axios.get('http://localhost:8080/api/cats/' + catId)
			.then(res => this.setState({
				cat: res.data
			}))
			.catch(() => 
				swal("Oops!", "Seems like we couldn't fetch the cat", "error")
			); 
  }

  render() {
    const { cat } = this.state;
    return(
      <Container>
        <h3 className='text-danger my-3'>Cat Detail</h3>
        <Card>
          <CardImg top width="100%" src={cat.image} alt={cat.name} />
          <CardBody>
            <CardTitle className='display-4 text-primary'>{cat.name}</CardTitle>
            <CardText className='text-warning'>color: {cat.color}</CardText>
          </CardBody>
        </Card>
      </Container>
    );
  }
}

CatDetail.propTypes = {
  cat: PropTypes.shape({
    name: PropTypes.string,
    color: PropTypes.string,
    image: PropTypes.string
  })
}

export default CatDetail;