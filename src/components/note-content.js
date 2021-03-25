import React, { useState, useEffect, useCallback, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import ReactQuill from "react-quill";
import BorderColorIcon from "../vectors/icons/border-line-icon.js";
import { debounce } from "../utils/utils.js";
import { updateNote } from "../utils/api.js";

const ContentContainer = styled.div`
  flex: 1;
  align-self: stretch;
`;

const Input = styled.input`
  flex: 1;
  align-self: stretch;
  background: #dfdfdf;
  border: 0;
  font-size: 24px;
  margin-left: 10px;
  text-transform: capitalize;
`;

const TitleContainer = styled.div`
  display: flex;
  min-height: 60px;
  align-items: center;
  background: #dfdfdf;
  padding-left: 10px;
`;

const TextContainer = styled.div`
  flex: 1;
`;

const NoteContent = ({ note }) => {
  const updateContentRef = useRef(false);
  const [title, setTitle] = useState(note.title);
  const [body, setBody] = useState(note.body);
  const [formattedBody, setformattedBody] = useState(note.formattedBody);

  useEffect(() => {
    setTitle(note.title);
    setBody(note.body);
    updateContentRef.current = false;
  }, [note]);

  const updateContent = useCallback(
    debounce((id, title, body, text) => {
      console.count();
      updateNote(id, {
        title,
        body,
        formattedBody: text,
      });
    }, 500),
    []
  );

  const updateTitle = (val) => {
    setTitle(val);
    updateContent(note?.id, val, body, formattedBody);
  };

  const updateBody = (val, delta, source, editor) => {
    const formattedText = editor.getText();
    setBody(val);
    setformattedBody(formattedText);
    if (updateContentRef.current)
      updateContent(note?.id, title, val, formattedText);
    else updateContentRef.current = true;
  };

  return (
    <ContentContainer>
      <TitleContainer>
        <BorderColorIcon width="36" height="36" />
        <Input
          placeholder={"Note title.."}
          value={title}
          onChange={(e) => updateTitle(e.target?.value)}
        />
      </TitleContainer>
      <TextContainer>
        <ReactQuill
          placeholder={"Write something..."}
          value={body}
          onChange={updateBody}
        />
      </TextContainer>
    </ContentContainer>
  );
};

NoteContent.defaultProps = {
  note: {},
};

NoteContent.propTypes = {
  note: PropTypes.object.isRequired,
};

export default NoteContent;
