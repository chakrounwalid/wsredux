import React, { useState } from "react";
import {Modal,Button,Form} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import {addMovie} from '../redux/movieSlice'


const MovieAdd = () => {
    const dispatch =useDispatch();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

    
    const [newMovie,setNewMovie] = useState({
        title :'',
        description :'',
        posterURL :'',
        id : Date.now()
        });
        const handleChange = (e) => {
          setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
        };
        const handleSubmit = () =>{
          dispatch(addMovie(newMovie));
          handleClose();
        }
        
  
    return (
      <>
        <Button variant="success" onClick={handleShow}>
          Add New Movie
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>New Movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  placeholder="Title Movie"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  name="description"
                  placeholder="Movie Description"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>posterURL</Form.Label>
                <Form.Control
                  type="text"
                  name="posterURL"
                  placeholder="posterURL"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Rating</Form.Label>
                <Form.Control
                  type = "Number"
                  name="rating"
                  min ="0"
                  max ="5"
                  placeholder="Movie Rating"
                  onChange={handleChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Add Movie
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
export default MovieAdd