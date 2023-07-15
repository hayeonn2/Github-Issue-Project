import moment from 'moment';
import { useEffect } from 'react';
import remarkGfm from 'remark-gfm';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { Loading } from '../Loading/Loading';
import { useParams } from 'react-router-dom';
import { ErrorPage } from '../../pages/ErrorPage';
import { useDetailIssue } from '../../hooks/useIssue';

export function IssueDetail() {
  const { number } = useParams();
  const { issueItem, fetchIssue, error, isLoading } = useDetailIssue();

  useEffect(() => {
    fetchIssue(parseInt(number));
  }, []);

  if (error) {
    return <ErrorPage />;
  }

  return (
    <>
      {!isLoading ? (
        <DetailWrapper>
          <Div>
            <Avatar
              src={issueItem?.user.avatar_url}
              alt="작성자 프로필 이미지"
            />
            <Container>
              <TitleBox>
                <DetailNumber>Issue #{issueItem?.number}</DetailNumber>
                <DetailTitle>{issueItem?.title}</DetailTitle>
              </TitleBox>
              <DetailUser>작성자: {issueItem?.user.login}</DetailUser>
              <p>
                작성일: {moment(issueItem?.created_at).format('YYYY-MM-DD')}
              </p>
              <DetailComments>코멘트 수: {issueItem?.comments}</DetailComments>
            </Container>
          </Div>
          <DetailBody remarkPlugins={[remarkGfm]}>{issueItem?.body}</DetailBody>
        </DetailWrapper>
      ) : (
        <Loading />
      )}
    </>
  );
}

const DetailWrapper = styled.div`
  width: 1000px;
  margin: 50px auto;
`;

const Div = styled.div`
  display: flex;
  flex-flow: row;
  position: relative;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
`;

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  font-weight: 600;
  margin-left: 10px;
`;

const TitleBox = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  margin-bottom: 10px;
`;

const Avatar = styled.img`
  display: block;
  width: 80px;
  height: 80px;
`;

const DetailNumber = styled.p`
  width: 120px;
  font-size: 16px;
  margin-top: 4px;
`;

const DetailTitle = styled.h3`
  font-size: 24px;
  margin-left: 10px;
`;

const DetailUser = styled.p`
  margin-right: 15px;
`;

const DetailComments = styled.p`
  margin-left: 15px;
`;

const DetailBody = styled(ReactMarkdown)`
  padding: 30px 0;
`;
