import React,{ useState } from "react";
import {Button,Form,Row,Col,FloatingLabel}from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updatenote} from "../Actions/NotesActions";

function NoteEditForm(props) {

     const [studentname,setStudentname]= useState(props.noteInfo.studentname);
     const [institution,setInstitution]= useState(props.noteInfo.institution);
     const [gen,setGen]= useState(props.noteInfo.gen);
     const [notedate, setNotedate]= useState(props.noteInfo.notedate);
     const [subject,setSubject]= useState(props.noteInfo.subject);
     const [notestitle,setNotestitle]= useState(props.noteInfo.notestitle);
     const [note,setNote]= useState(props.noteInfo.note);
    const dispatch = useDispatch();

     const handleSubmit =(e)=>{
        e.preventDefault();
        // props.updatenote(props.noteInfo.id,{notename,email,mobile,password});
     let noteInfo = {id:props.noteInfo.id, studentname,institution,notedate,gen,subject,notestitle,note};
         dispatch(updatenote(noteInfo));
        setStudentname("");
        setInstitution("");
        setGen("");
        setNotedate("");
        setSubject("");
       setNotestitle("");
       setNote("");
       props.hide();
     };
    
  return (
    <div>
      <Form>
      <Row className="g-2">
      <Col md>
        <FloatingLabel controlId="floatingInputGrid" label="Fullname">
          <Form.Control 
          type="Text"
          placeholder="Enter your Fullname"
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
          placeholder="Enter your Institution"
          value={institution}
          onChange={(e) => {
            setInstitution(e.target.value);
          }}
          />
        </FloatingLabel>
     
      </Col>
     </Row>
     <Col className="allnote"></Col>
     <Row className="g-2">
      <Col md>
        <FloatingLabel controlId="floatingInputGrid" label="Level">
          <Form.Control 
          type="Text"
          placeholder="Enter your Level"
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
          placeholder="Enter your Date"
          value={Date}
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
          placeholder="Enter your Level"
          value={subject}
          onChange={(e) => {
            setSubject(e.target.value);
          }}
          />
        </FloatingLabel>
      </Col>
      <Col md>

      <FloatingLabel controlId="floatingInputGrid" label="Titile">
          <Form.Control 
          type="text"
          placeholder="Enter  Titile"
          value={notestitle}
          onChange={(e) => {
            setNotestitle(e.target.value);
          }}
          />
        </FloatingLabel>
     
      </Col>
     </Row>
     <Col className="allnote"></Col>
     <Col className="allnote"></Col>
    
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
     <Col className="allnote"></Col>
     {/* <Button onClick={handleSubmit}  variant="primary" type="submit">Update</Button> */}
     <div className="d-grid gap-2">
      <Button variant="primary" onClick={handleSubmit} size="lg">
        Update
      </Button>
    </div>
   </Form>
   </div>
  );
}

export default NoteEditForm;
