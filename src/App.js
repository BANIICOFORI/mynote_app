import "bootstrap/dist/css/bootstrap.min.css";

import {connect} from 'react-redux';
import {useState} from "react";
import { Row, Col, Container } from "react-bootstrap";
// import NoteEditForm from './Components/NoteEditForm "#d9f1ff"';
import AllNotes from './Components/AllNotes';
import NotesForm from './Components/NotesForm';
import Navbar from './Components/Navbar';
import Footer from "./Components/Footer";




function App() {
  const  [notes, setNotes] = useState([
  ]);
  const handleUpdate=(id,updateInfo)=>{
    setNotes(
        notes.map((note)=>{
          if(note.id===id){
            return updateInfo;
          }
          return note; 
        })

    );
 

  };
  const addNewNote = (note) => {
   
  };
  const DeleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
    console.log("delete");
  };
  return (
    <div style={{}}>
          <Container  className="allnote">
          <Navbar /> 
          <Col className="allnote"></Col>
            <Row>
              <Col md={4} style={{ }}>
              <NotesForm newNote={addNewNote}/>
            
              
              </Col>
             
               <Col md={8}>
          
                <AllNotes
                newNote={notes}
                DeleteNote={DeleteNote}
                Updatenote={handleUpdate}
                />
              </Col>
            </Row>
            <Footer />
          </Container>
    
     
     
    </div>
  );
}
const mapStateToProps = (state) => ({
  notes:state.notes
})

export default connect(mapStateToProps)(App);
