import styled from 'styled-components';
import {Input} from './Input';
import searchIcon from '../../assets/icons/search.svg';

export const SearchInputWrapper = styled.div`
  position: relative;
  max-width: 258px;
  width: 100%;
`;

export const InputSearch = styled(Input)`
  width: 100%;
  padding-left: 40px;
  background-image: url(${searchIcon});
  background-position: 16px 50%;
  background-repeat: no-repeat;
`;

export const InputResults = styled.ul`
  position: absolute;
  right: 0;
  bottom: -5px;
  transform: translateY(100%);
  width: 386px;
  max-height: 232px;
  padding: 16px;
  z-index: 1000000;
  background: #FF9A6F;
  border-radius: 4px;
  color: #FFCFBB;
  overflow-y: auto;

  &:empty {
    display: none;
  }
`;

export const ResultItem = styled.li`
  & + & {
    margin-top: 16px;
  }
`;

export const ResultLink = styled.a`
  display: block;
  text-decoration: none;
  cursor: pointer;
`;

export const ResultTitle = styled.p`
  font-size: 15px;
  line-height: 16px;
  color: #C8C9DA;
  margin-bottom: 6px;
`;

export const ResultText = styled.p`
  font-size: 12px;
  line-height: 140%;
  color: #C8C9DA;
`;
