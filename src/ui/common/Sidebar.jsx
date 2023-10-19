import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.svg';
import logoSmall from '../../assets/logo-small.svg';
import expandIcon from '../../assets/icons/expand.svg';
import {useLayout} from './Layout/LayoutProvider';

export const Sidebar = ({children, footerLink}) => {
  const {sidebarLayout} = useLayout();
  const [isSidebarExpanded, setIsSidebarExpanded] = sidebarLayout;

  return (
    <SidebarView isExpanded={isSidebarExpanded}>
      <SidebarHeader isExpanded={isSidebarExpanded}>
        <img src={isSidebarExpanded ? logo : logoSmall} alt="logo"/>
      </SidebarHeader>
      <SidebarInner>
        {isSidebarExpanded &&
          <>
            <SidebarList>
             {children}
            </SidebarList>
            <SidebarFooterLinkWrapper>
              {footerLink}
            </SidebarFooterLinkWrapper>
          </>
        }
      </SidebarInner>
      <SidebarFooter>
        <ExpandButton
          onClick={() => setIsSidebarExpanded(!isSidebarExpanded)}
          isSidebarExpanded={isSidebarExpanded}
        />
      </SidebarFooter>
    </SidebarView>
  );
};

const SidebarView = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: ${({isExpanded}) => isExpanded ? '254px' : '111px'};
  height: 100%;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), #FFCFBB;
  z-index: 9999;
`;

const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({isExpanded}) => isExpanded ? 'flex-start' : 'center'};
  height: 59px;
  padding: 13px 16px 16px;
`;

const SidebarInner = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  padding: 28px 12px;
  border-top: 0px solid;
  border-image: linear-gradient(to right, #fde699, #FF9A6F, #6BCACE) 1;
`;


const SidebarList = styled.ul`
  flex-grow: 1;
  margin-bottom: 30px;
`;

export const CategoryName = styled.p`
  margin-bottom: 16px;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  color: black;
`;

export const Category = styled.li`
  & + & {
    margin-top: 32px;
  }
`;

export const SidebarLink = styled.a`
  display: block;
  font-size: 15px;
  line-height: 16px;
  width: 100%;
  padding: 11px 12px;
  font-weight: ${({isActive}) => isActive ? '700' : '400'};
  color: ${({isActive}) => isActive ? '#FFFFFF' : 'black'};
  background: ${({isActive}) => isActive ? '#FF9A6F' : 'transparent'};
  border-radius: 4px;
  text-decoration: none;
  word-break: break-all;
`;

const SidebarFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  padding: 15px;
  border-top: 2px solid white;
`;

const ExpandButton = styled.button`
  width: 18.75px;
  height: 16.5px;
  transform: ${({isSidebarExpanded}) => isSidebarExpanded ? 'rotate(0)' : 'rotate(180deg)'};
  background: url(${expandIcon}) center no-repeat;
  background-size: contain;
  border: none;
  cursor: pointer;
`;

const SidebarFooterLinkWrapper = styled.div`
  padding: 0 12px;
`;
