import moment from 'moment';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export function IssueListItem({ item, children }) {
  return (
    <>
      <IssueListItemBox key={item.id}>
        <IssueTitleWrapper>
          <IssueNumber>#{item.number}</IssueNumber>
          <IssueTitle>{item.title}</IssueTitle>
        </IssueTitleWrapper>
        <IssueUser>작성자: {item.user.login}</IssueUser>
        <IssueDate>
          작성일: {moment(item.created_at).format('YYYY-MM-DD')}
        </IssueDate>
        <IssueComments>코멘트: {item.comments}</IssueComments>
      </IssueListItemBox>
      {children}
    </>
  );
}

const IssueListItemBox = styled.li`
  padding: 10px 0 20px 10px;
  border-bottom: 1px solid #ccc;
  position: relative;
  &:hover {
    background: #efefef;
    transition: all 0.6s;
  }
`;

const IssueTitleWrapper = styled.div`
  padding: 15px 0;
`;

const IssueNumber = styled.span`
  padding-right: 10px;
`;

const IssueTitle = styled(Link)`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  text-decoration: none;
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
  right: 10px;
  color: #666;
`;
