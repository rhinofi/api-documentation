import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${({isSidebarExpanded}) => isSidebarExpanded ? 'calc(100% - 254px)' : 'calc(100% - 111px)'};
  height: 60px;
  padding: 0 24px;
  border-bottom: 1px solid #2b2d3d;
  background: #212433;
  z-index: 100;
`;

export const Content = styled.div`
  padding-left: ${({isSidebarExpanded}) => isSidebarExpanded ? '254px' : '111px'};
`;

export const Main = styled.main`
  padding: 0;
`;
