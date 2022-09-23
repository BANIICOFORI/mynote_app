import React, { useState } from "react";
import { Row,Col,FloatingLabel,Card } from "react-bootstrap";
import {addNewNote } from "../Actions/NotesActions";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";

function NotesForm(props) {
  const [studentname, setStudentname] = useState("");
  const [institution, setInstitution] = useState("");
  const [gen, setGen] = useState("");
  const [notedate, setNotedate] = useState("");
  const [subject, setSubject] = useState("");
  const [notestitle, setNotetitile] = useState("");
  const [note, setNote] = useState("");

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    let noteInfo = { id: uuid(),studentname,institution,gen,notedate,subject,notestitle,note};
    
    dispatch(addNewNote(noteInfo));

    setStudentname("");
    setInstitution("");
    setGen("");
    setNotedate("");
    setSubject("");
    setNotetitile("");
    setNote("");
  };

     return (
      
      <Card>
        <div>
    <Col className="allnote"></Col> 
      <Row className="g-2">
      <Col md>
        <FloatingLabel controlId="floatingInputGrid" label="Fullname">
          <Form.Control 
          type="text"  
           placeholder="Enter your fullname"
           value={studentname}
           onChange={(e) => {
             setStudentname(e.target.value);
           }}
          />
        </FloatingLabel>
      </Col>

      <Col md>

      <FloatingLabel controlId="floatingInputGrid" label="Institution">
          <Form.Control 
          type="text"  
          placeholder="Enter Your institution"
          value={institution}
          onChange={(e) => {
            setInstitution(e.target.value);
          }}
          />
        </FloatingLabel>
        {/* <FloatingLabel
        
         
         >
          <Form.Select aria-label="Floating label select example">
            <option>select Your institution</option>
            <option value="1">Codetrain</option>
            <option value="2">CodeCamp</option>
            <option value="3">Front End Masters</option>
          </Form.Select>
           {/*</FloatingLabel> */}
    </Col>
     </Row>
     <Col className="allnote"></Col> 
     <Row className="g-2">
      <Col md>
        <FloatingLabel controlId="floatingInputGrid" label="Level">
          <Form.Control 
          type="Text"
          placeholder="Enter your level"
          value={gen}
          onChange={(e) => {
            setGen(e.target.value);
          }}
          />
        </FloatingLabel>
      </Col>
      <Col md>

          <FloatingLabel controlId="floatingInputGrid" label="Date">
          <Form.Control 
          type="date"
          placeholder="Enter your date"
          value={notedate}
          onChange={(e) => {
            setNotedate(e.target.value);
          }}
          />
        </FloatingLabel>
     
      </Col>
     </Row>
     <Col className="allnote"></Col>
     <Row className="g-2">
      <Col md>
        <FloatingLabel controlId="floatingInputGrid" label="Subject">
          <Form.Control 
           type="Text"
           placeholder="Enter the subject"
           value={subject}
           onChange={(e) => {
             setSubject(e.target.value);
           }}
          />
        </FloatingLabel>
      </Col>
      <Col md>

      <FloatingLabel controlId="floatingInputGrid" label="Title">
          <Form.Control 
           type="Text"
           placeholder="Enter note Title"
           value={notestitle}
           onChange={(e) => {
             setNotetitile(e.target.value);
           }}
          />
        </FloatingLabel>
     
      </Col>
     </Row>
     <Col className="allnote"></Col>
     <Row className="g-2">
      <Col md>
      <textarea controlId="floatingInputGrid" label="Main Note" style={{ height: '125px',width:"100%" }}
          
          
          type="textarea"  
           placeholder="Enter your main note"
           value={note}
           onChange={(e) => {
             setNote(e.target.value);
           }}
          >
        </textarea>
      </Col>
     </Row>
     <Col className=""></Col>
     {/* <Button onClick={handleSubmit} variant="primary" type="submit" size="lg">
          Submit
        </Button> */}

      <div className="d-grid gap-2">
      <Button variant="primary" onClick={handleSubmit} size="lg">
        Add Note
      </Button>
      {/* <Button variant="secondary" onClick={handleSubmit}size="lg">
       Add Note
      </Button> */}
    </div>
    
    <Col className="allnoteBt"></Col>
    </div>
    </Card>
  );
}

export default NotesForm;
