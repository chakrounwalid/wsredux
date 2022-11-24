import React, { useState } from "react";
import {Modal,Button,Form} from 'react-bootstrap'
import { editMovie } from "../redux/movieSlice";
import {useDispatch} from 'react-redux'


const EditMovie = ({movie}) => {
    const dispatch =useDispatch();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

    
    const [edMovie,setedMovie] = useState(movie);
        const handleChange = (e) => {
          setedMovie({ ...edMovie, [e.target.name]: e.target.value });
        };
        const handleSubmit = () =>{
          dispatch(editMovie({id:movie.id,edMovie}));
          handleClose();
        }
        
  
    return (
      <>
        <Button variant="secondary" onClick={handleShow}>
          Edit 
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={edMovie.title}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  name="description"
                  value={edMovie.description}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>posterURL</Form.Label>
                <Form.Control
                  type="text"
                  name="posterURL"
                  value={edMovie.posterURL}
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
                  value={edMovie.rating}
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
              Edit Movie
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
export default EditMovie