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
          <Container>
            <TitleBox>
              <DetailTitle>{issueItem?.title}</DetailTitle>
              <DetailNumber>Issue #{issueItem?.number}</DetailNumber>
            </TitleBox>
            <ItemBox>
              <DetailUser>{issueItem?.user.login}</DetailUser>
              <DetailDate>
                {moment(issueItem?.created_at).format('YYYY-MM-DD')}
              </DetailDate>
              <DetailComments>{issueItem?.comments} comments</DetailComments>
            </ItemBox>
          </Container>

          <Div>
            <Avatar
              src={issueItem?.user.avatar_url}
              alt="작성자 프로필 이미지"
            />
            <Box>
              <DetailBody
                remarkPlugins={[remarkGfm]}
                components={{
                  img: (image) => (
                    <img
                      src={image.src || ''}
                      alt={image.alt || ''}
                      style={{
                        maxWidth: '100%',
                        height: 'auto',
                      }}
                    />
                  ),
                }}
              >
                {issueItem?.body}
              </DetailBody>
            </Box>
          </Div>
        </DetailWrapper>
      ) : (
        <Loading />
      )}
    </>
  );
}

const DetailWrapper = styled.div`
  width: 600px;
  margin: 50px auto;
  /* outline: 2px solid blue; */
`;

const Box = styled.div`
  width: 90%;
  position: relative;
  /* outline: 2px solid gold; */
`;

const Div = styled.div`
  padding: 20px 16px;
  display: flex;
  flex-flow: row nowrap;
  /* outline: 2px solid green; */
  /* background-color: green; */
  > ::before {
    display: block;
    content: '';
    position: absolute;
    left: 0;
    top: 10px;
    width: 0;
    height: 0;
    border-bottom: 10px solid transparent;
    border-top: 10px solid transparent;
    border-left: 10px solid transparent;
    border-right: 10px solid #212324;
  }
`;

const Container = styled.div`
  border-bottom: 1px solid #31363c;
  padding: 12px 16px;
  font-size: 22px;
`;

const TitleBox = styled.div``;

const Avatar = styled.img`
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 100%;
`;

const DetailNumber = styled.span`
  color: #7d8590;
  font-weight: 300;
  margin-left: 10px;
`;

const DetailTitle = styled.span`
  font-weight: 600;
`;

const ItemBox = styled.div`
  font-size: 14px;
  padding: 10px 0;
  color: #7d8590;
`;

const DetailUser = styled.span``;

const DetailDate = styled.span`
  margin: 10px;
`;

const DetailComments = styled.span``;

const DetailBody = styled(ReactMarkdown)`
  /* outline: 1px solid red; */
  margin-left: 20px;
  background-color: #212324;
  border-radius: 3px;
  padding: 30px;

  > p,
  h1 {
    width: 100%;
    line-height: 1.2;
    margin-bottom: 20px;
    word-wrap: break-word;
  }

  > pre {
    background: #3d3d3d;
    width: 100%;
    padding: 20px 0;
    margin: 30px 0;
    overflow-x: auto;
    border-radius: 5px;
    font-size: 14px;
  }
  > pre code {
    display: block;
    padding: 10px 16px;
  }
`;
