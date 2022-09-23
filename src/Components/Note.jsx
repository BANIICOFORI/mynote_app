import React, { useState }from 'react'
import { Card, Col, Button ,Modal, Container } from "react-bootstrap";
import {connect,useDispatch} from "react-redux";
import { DeleteNote } from '../Actions/NotesActions';
import NoteEditForm from './NoteEditForm';
import  './style.css'




function Note(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true); 
  const dispatch = useDispatch(); 

  const handleDelete=(e)=>{
    e.preventDefault();
    dispatch(DeleteNote(props.noteInfo.id));
    console.log("Is item deleted ?");
    };
  
   return (
    <>
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
    <Modal.Title>Edit your Note</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <NoteEditForm 
      // Updatenote={props.Updatenote}
      hide={handleClose}
      noteInfo={props.noteInfo}
      />
    </Modal.Body>
    </Modal>
    <Card>
      <Card.Header>Note Book</Card.Header>
      <Card.Body>
        <Card>
      <Card.Title>Fullname : {props.noteInfo.studentname} </Card.Title>
            <Card.Title>Institution : {props.noteInfo.institution} </Card.Title>
            <Card.Title>Level : {props.noteInfo.gen} </Card.Title>
            <Card.Title>Date : {props.noteInfo.notedate}</Card.Title>
            <Card.Title>Subject : {props.noteInfo.subject}</Card.Title>
            <Card.Title>Title: {props.noteInfo.notestitle}</Card.Title>
            </Card>
            <Col className="allnoteBt"></Col>
            <Card> {props.noteInfo.note}</Card>
            <Col className="allnoteBt"></Col>
        <Container className='button'>
          <Col className='md-3' size="lg"><Button variant="primary "onClick={handleShow}>Edit note</Button></Col>
          <Col className='md-3' size="lg"><Button variant="danger delt" onClick={handleDelete}>Delete note</Button></Col>

        </Container>
        
      </Card.Body>
    </Card>
    <Col className="allnoteBt"></Col>
</>

  
  );

 
}

const mapDispatchToProps = {
	DeleteNote,
};

export default connect(null,mapDispatchToProps) (Note);

// export default Note