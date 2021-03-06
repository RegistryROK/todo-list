import { FC } from 'react';
import styled from 'styled-components';
import palette from '../styles/palette';

const Header: FC = () => {
  return (
    <Container>
      <h1>Registry's TodoList</h1>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 52px;
  padding: 0 12px;
  border-bottom: 1px solid ${palette.gray};
  h1 {
    font-size: 21px;
  }
`;

export default Header;
