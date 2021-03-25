import React, { useState, useEffect, lazy, Suspense } from "react";

import styled from "styled-components";

import { useFirebaseAsync } from "../utils/custom-hooks.js";
import { emptyNote, createNewNote, loadingText } from "../utils/configs.js";
import { fetchNotes, createNote } from "../utils/api.js";
import { Sidebar, Content } from "../components/layout.js";
import CreateBtn from "../components/button.js";
import SearchField from "../components/search-field.js";
import NoteContent from "../components/note-content.js";

const NotesList = lazy(() =>
  import(/* webpackChunkName: "notes-list" */ "../components/notes-list.js")
);

const NotesContainer = styled.div`
  display: flex;
  border: 1px solid black;
  border-radius: 5px;
  flex-wrap: wrap;
`;

const ActionContainer = styled.div`
  display: flex;
  border-radius: 5px;
  margin: 10px 0;
`;

const NotePad = () => {
  const [notes, setNotes] = useState(null);
  const [selectedNote, setSelectedNote] = useState(null);
  const { value, status } = useFirebaseAsync(fetchNotes);

  useEffect(() => {
    const sortedList = value?.sort((a, b) => b?.timestamp - a?.timestamp);
    setNotes(sortedList);
  }, [value]);

  useEffect(() => {
    if (selectedNote === false) setSelectedNote(notes[0]);
  }, [selectedNote]);

  const newNote = async () => {
    const note = emptyNote;
    await createNote(note);
    setSelectedNote(false);
  };

  const searchNote = (value) => {
    const searchKey = value;
    const filteredNotes = filterNotes(searchKey);
    setSelectedNote(false);
    setNotes(filteredNotes);
  };

  const filterNotes = (key) => {
    const lowercaseKey = key.toLowerCase();
    return value.filter(
      (note) =>
        note?.title?.toLowerCase().includes(lowercaseKey) ||
        note?.formattedBody?.toLowerCase().includes(lowercaseKey)
    );
  };

  if (status !== "success") {
    return loadingText;
  }

  return (
    <Suspense fallback={<div>{loadingText}</div>}>
      <ActionContainer>
        <CreateBtn onClick={newNote} value={createNewNote} />
        <SearchField searchNote={searchNote} />
      </ActionContainer>
      <NotesContainer>
        <Sidebar>
          {notes.length ? (
            <NotesList
              notes={notes}
              selectNote={setSelectedNote}
              selectedNote={selectedNote}
            />
          ) : (
            <div>No items found.</div>
          )}
        </Sidebar>
        <Content>
          {selectedNote ? (
            <NoteContent note={selectedNote} />
          ) : (
            <div>Select/Create a note</div>
          )}
        </Content>
      </NotesContainer>
    </Suspense>
  );
};

export default NotePad;
