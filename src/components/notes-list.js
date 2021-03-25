import * as React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

import DeleteIcon from "../vectors/icons/delete-icon.js";
import { deleteNote } from "../utils/api.js";

const ListItem = styled.li`
  display: flex;
  flex: 1;
  justify-content: space-between;
  cursor: pointer;
  align-items: center;
  border-bottom: 1px solid grey;
  min-height: 60px;
  background: ${(props) => (props.selected ? "#dfdfdf" : "")};
`;
const ListItemText = styled.div`
  text-align: left;
  padding: 10px;
  flex: 1;
`;
const Title = styled.h4`
  margin: 0;
  text-transform: capitalize;
`;
const ShortContent = styled.span`
  font-size: 12px;
  color: #404040;
`;

const NotesList = ({ notes, selectNote, selectedNote }) => {
  const substringText = (text, length) =>
    text?.length > length ? text.substring(0, length) + "..." : text;

  const removeItem = async (note) => {
    const removeSelected = selectedNote?.id === note.id;
    if (window.confirm(`Are you sure you want to delete: ${note.title}`)) {
      await deleteNote(note.id);
      if (removeSelected) {
        selectNote(false);
      }
    }
  };

  return notes.map((note, index) => (
    <div key={index}>
      <ListItem selected={note.id === selectedNote?.id}>
        <ListItemText onClick={() => selectNote(note)}>
          <Title>{substringText(note.title, 15)}</Title>
          <ShortContent>{substringText(note.formattedBody, 20)}</ShortContent>
        </ListItemText>
        <div onClick={() => removeItem(note)}>
          <DeleteIcon />
        </div>
      </ListItem>
    </div>
  ));
};

NotesList.defaultProps = {
  notes: [],
  selectNote: () => {},
  selectedNote: {},
};

NotesList.propTypes = {
  notes: PropTypes.array.isRequired,
  selectNote: PropTypes.func.isRequired,
  selectedNote: PropTypes.any,
};

export default NotesList;
