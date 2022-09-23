export const addNewNote = (newNote) => {
  return {
    type: "ADD_NEW_NOTE",
    payload: newNote,
  };
};
export const updatenote = (updated)=>{
    return{
        type:"UPDATE_NOTE",
        payload: {updated}
    }
}

export const DeleteNote = (note_id) => {
  return {
    type: "DELETE_NOTE",
    payload: note_id,
  }
}