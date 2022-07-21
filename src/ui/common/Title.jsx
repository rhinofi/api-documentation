import styled from 'styled-components';

export const Title = styled.h2.attrs(props => ({
  className: 'articles-title',
}))`
  font-weight: bold;
  font-size: 30px;
  line-height: 120%;
  color: black;
`;
