import styled from 'styled-components';
import LoadingImg from './Loading.svg';

export function Loading() {
  return (
    <Container>
      <LoadingImage src={LoadingImg} />
    </Container>
  );
}

const Container = styled.div`
  width: 600px;
  margin: 100px auto;
`;
const LoadingImage = styled.img`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
`;
