import styled from 'styled-components';

export const Tabs = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background: #1E202E;
  border-radius: 4px;
`;

export const TabsHeader = styled.div`
  border-bottom: 1px solid #2b2d3d;
  padding: 0 9px;
  `;

export const TabButton = styled.button`
  position: relative;
  height: 100%;
  padding: 16px 8px ;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #FFFFFF;
  background: none;
  border: none;
  cursor: pointer;
  text-transform: capitalize;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: ${({isActive}) => isActive ? '#5500FC' : 'transparent'};
    border-radius: 4px 4px 0px 0px;
  }

  & + & {
    margin-left: 8px;
  }
`;

export const TabsContent = styled.div`
  flex-grow: 1;
  padding: 13px 16px;
  height: 300px;
  overflow-y: auto;
`;
