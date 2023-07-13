import moment from 'moment';
import remarkGfm from 'remark-gfm';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { IssueContext } from '../../contexts';

export function IssueDetail() {
  const { number } = useParams();
  const { issueItem, fetchIssue } = useContext(IssueContext);

  useEffect(() => {
    fetchIssue(parseInt(number));
  }, []);

  return (
    <DetailWrapper>
      <Div>
        <Avatar src={issueItem?.user.avatar_url} alt="작성자 프로필 이미지" />
        <Container>
          <TitleBox>
            <DetailNumber>Issue #{issueItem?.number}</DetailNumber>
            <DetailTitle>{issueItem?.title}</DetailTitle>
          </TitleBox>
          <DetailUser>작성자: {issueItem?.user.login}</DetailUser>
          <DetailDate>
            작성일: {moment(issueItem?.created_at).format('YYYY-MM-DD')}
          </DetailDate>
          <DetailCommnets>코멘트 수: {issueItem?.comments}</DetailCommnets>
        </Container>
      </Div>
      <DetailBody remarkPlugins={[remarkGfm]}>{issueItem?.body}</DetailBody>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  width: 1000px;
  margin: 50px auto;
`;

const Div = styled.div`
  /* background-color: purple; */
  display: flex;
  flex-flow: row;
  position: relative;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
`;

const Container = styled.div`
  /* outline: 2px solid red; */
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  font-weight: 600;
  margin-left: 10px;
`;

const TitleBox = styled.div`
  /* background-color: pink; */
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
  /* background-color: skyblue; */
  width: 120px;
  font-size: 16px;
  margin-top: 4px;
`;

const DetailTitle = styled.h3`
  /* background-color: lime; */
  font-size: 24px;
  margin-left: 10px;
`;

const DetailUser = styled.p`
  /* background-color: gold; */
  margin-right: 15px;
`;

const DetailDate = styled.p`
  /* background-color: pink; */
`;

const DetailCommnets = styled.p`
  /* background-color: gray; */
  margin-left: 15px;
`;

const DetailBody = styled(ReactMarkdown)`
  padding: 30px 0;
`;
