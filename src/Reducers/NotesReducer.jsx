import { v4 as uuid } from "uuid";

let initialState = {
  notes:[
    {
      id: uuid(),
      studentname: "Herbert Ofori Boadi",
      institution: "Codetrain",
      gen: "GEN 22",
      notedate: "2022-09-17",
      subject: "React Redux",
      notestitle: "Getting Started with Redux",
      note: "Redux is a predictable state container for JavaScript apps.It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.You can use Redux together with React, or with any other view library. It is tiny (2kB, including dependencies), but has a large ecosystem of addons available.",
    },
  ],
};
const NotesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NEW_NOTE":
      return { ...state, notes: [...state.notes, action.payload] };

    case "DELETE_NOTE":
      const unDeleteNote = state.notes.filter(
        (notte) => notte.id !== action.payload
      );
      return { ...state, notes: unDeleteNote };
        
      case "UPDATE_NOTE":
          const updatenote = state.notes.map((note) => {
            if(note.id===action.payload.updated.id){
              return action.payload.updated
            }
            else {return note}
          })
            return { ...state, notes:updatenote}
      
            default:
        return state;
    }
};
export default NotesReducer;
