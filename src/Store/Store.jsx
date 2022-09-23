
import { legacy_createStore as createStore } from "redux";
import NotesReducer from "../Reducers/NotesReducer";

const Store = createStore(NotesReducer);

export default Store;
