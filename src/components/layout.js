import React from "react";
import styled from "styled-components";

const SidebarContainer = styled.div`
  flex: 1;
  border-right: 1px solid grey;
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 3;
`;

const Sidebar = ({ children }) => {
  return <SidebarContainer>{children}</SidebarContainer>;
};
const Content = ({ children }) => {
  return <ContentContainer>{children}</ContentContainer>;
};

export { Sidebar, Content };
