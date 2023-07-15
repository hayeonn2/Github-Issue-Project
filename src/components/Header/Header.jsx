import styled from 'styled-components';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <HeaderTitle>
      <h1>
        <MainLink to="/">facebook/react</MainLink>
      </h1>
    </HeaderTitle>
  );
}

const HeaderTitle = styled.header`
  text-align: center;
  padding: 20px 0;
`;

const MainLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;
