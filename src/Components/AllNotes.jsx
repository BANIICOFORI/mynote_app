import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Note from "./Note";

function AllNotes(props) {
  const { notes } = useSelector((state) => {
    return state;
  });
  return(
    <>
      <Container>
        <Row>
          {notes.map((notes) => {
            return (
            <Note 
            // key={notes.id} 
            noteInfo={notes}
            // DeleteNote={props.DeleteNote}
            // updatenote={props.updatenote} 
            />
            ); 
          })}
        </Row>
      </Container>
    </>
  );
}

export default AllNotes;
