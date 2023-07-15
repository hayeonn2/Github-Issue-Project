import styled from 'styled-components';
import { Link } from 'react-router-dom';

export function Advertisement() {
  return (
    <AdWrapper>
      <LinkAd to="https://www.wanted.co.kr/">
        <Image
          src="https://github.com/hayeonn2/pre-onboarding-11th-3-17/assets/111109573/b5c3fa90-875a-44a6-841a-557c0895427a"
          alt="광고"
        />
      </LinkAd>
    </AdWrapper>
  );
}

const AdWrapper = styled.li`
  padding: 17px 0;
  border-bottom: 1px solid #31363c;
`;

const LinkAd = styled(Link)`
  display: block;
  text-align: center;
`;

const Image = styled.img`
  width: 80px;
`;
