import { firebase } from "@firebase/app";

export const fetchNotes = (onSuccess, onError) =>
  firebase
    .firestore()
    .collection("notes")
    .onSnapshot(
      (response) => {
        const note = response.docs.map((_doc) => {
          const data = _doc.data();
          data["id"] = _doc.id;
          return data;
        });
        onSuccess(note);
      },
      (error) => {
        onError(error);
      }
    );

export const updateNote = (id, noteObj) => {
  firebase.firestore().collection("notes").doc(id).update({
    title: noteObj.title,
    body: noteObj.body,
    formattedBody: noteObj.formattedBody,
    timestamp: new Date().getTime(),
  });
};

export const createNote = async (note) => {
  return await firebase.firestore().collection("notes").add({
    title: note.title,
    body: note.body,
    formattedBody: note.formattedBody,
    timestamp: new Date().getTime(),
  });
};

export const deleteNote = async (id) =>
  await firebase.firestore().collection("notes").doc(id).delete();
