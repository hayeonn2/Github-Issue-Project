import moment from 'moment';
import { useEffect } from 'react';
import styled from 'styled-components';
import { useFetchGithub } from '../../contexts/';
import { Link } from 'react-router-dom';

export function IssueList() {
  const { issueList, fetchIssueList } = useFetchGithub();

  useEffect(() => {
    fetchIssueList();
  }, []);

  return (
    <main>
      <IssueWrap>
        {issueList &&
          issueList.map((item) => (
            <IssueListItem key={item.id}>
              <IssueTitleWrapper>
                <IssueNumber>#{item.number}</IssueNumber>
                <Link to="/">
                  <IssueTitle>{item.title}</IssueTitle>
                </Link>
              </IssueTitleWrapper>
              <IssueUser>작성자: {item.user.login}</IssueUser>
              <IssueDate>
                작성일: {moment(item.created_at).format('YYYY-MM-DD')}
              </IssueDate>
              <IssueComments>코멘트: {item.comments}</IssueComments>
            </IssueListItem>
          ))}
      </IssueWrap>
    </main>
  );
}

const IssueWrap = styled.ul`
  list-style: none;
  width: 1000px;
  margin: 0 auto;
  padding: 0;
`;

const IssueListItem = styled.li`
  padding: 10px 0 20px 0;
  border-bottom: 1px solid #ccc;
  position: relative;
`;

const IssueTitleWrapper = styled.div`
  padding: 15px 0;
`;

const IssueNumber = styled.span`
  padding-right: 10px;
`;

const IssueTitle = styled.span`
  font-size: 18px;
  font-weight: 600;
`;

const IssueUser = styled.span`
  padding-right: 20px;
  color: #333;
`;

const IssueDate = styled.span`
  color: #666;
`;

const IssueComments = styled.span`
  position: absolute;
  right: 0;
  color: #666;
`;
