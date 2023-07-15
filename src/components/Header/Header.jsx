import styled from 'styled-components';
export function Header() {
  return (
    <HeaderTitle>
      <h1>facebook/react</h1>
    </HeaderTitle>
  );
}

const HeaderTitle = styled.header`
  text-align: center;
  padding: 20px 0;
`;
