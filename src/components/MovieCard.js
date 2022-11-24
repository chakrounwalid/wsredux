import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Rating } from '@mui/material';
import {useDispatch} from 'react-redux';
import { delMovie } from '../redux/movieSlice';
import EditMovie from './EditMovie';


const MovieCard = ({movie})=> {
  const dispatch = useDispatch()
    return (
    <Card style={{ width: '18rem'}}>
      <Rating name="read-only" value={movie.rating} readOnly />
      <Card.Img style={{width:'286px',height:'400px'}} variant="top" src={movie.posterURL} alt="movie image"/>
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
          {movie.description}
        </Card.Text>
         <EditMovie movie={movie}/>{' '}
        <Button variant="danger" onClick={()=>dispatch(delMovie(movie.id))}>Remove</Button>
      </Card.Body>
    </Card>
  
  );
}

export default MovieCard;