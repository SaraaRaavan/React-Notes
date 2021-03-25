import * as React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";


const Button = styled.div`
  border-radius: 3px;
  border: 2px solid black;
  cursor: pointer;
  padding: 10px;
  flex: 1;
`;

const CreateBtn = ({ onClick, value }) => {
  return <Button onClick={onClick}>{value}</Button>;
};

CreateBtn.defaultProps = {
  value: 'button',
  onClick: () => {}
};

CreateBtn.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default CreateBtn;
