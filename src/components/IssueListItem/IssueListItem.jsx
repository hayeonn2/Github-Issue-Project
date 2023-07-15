import moment from 'moment';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export function IssueListItem({ item, children }) {
  return (
    <>
      <IssueListItemBox key={item.id}>
        <IssueTitle to={`/issues/${item.number}`}>{item.title}</IssueTitle>
        <ItemWrapper>
          <IssueNumber>#{item.number}</IssueNumber>
          <IssueUser>by {item.user.login}</IssueUser>
          <IssueDate>{moment(item.created_at).format('YYYY-MM-DD')}</IssueDate>
          <IssueComments>
            <IssueCommentsImg src="https://github.com/hayeonn2/pre-onboarding-11th-3-17/assets/111109573/92047c5d-6b24-4821-bf82-09e7d5687ca2" />
            {item.comments}
          </IssueComments>
        </ItemWrapper>
      </IssueListItemBox>
      {children}
    </>
  );
}

const IssueListItemBox = styled.li`
  padding: 12px 16px;
  border-bottom: 1px solid #31363c;
  position: relative;
  &:hover {
    background: #171b21;
    transition: all 0.6s;
  }
`;

const ItemWrapper = styled.div`
  padding-top: 10px;
  color: #7d8590;
  font-size: 14px;
`;

const IssueNumber = styled.span``;

const IssueTitle = styled(Link)`
  font-size: 18px;
  font-weight: 600;
  color: #e7edf2;
  text-decoration: none;
  display: block;
  width: 85%;
  line-height: 1.4;
`;

const IssueUser = styled.span`
  padding: 0 10px;
`;

const IssueDate = styled.span``;

const IssueComments = styled.span`
  position: absolute;
  top: 15px;
  right: 16px;
  color: #7d8590;
  /* background-color: blue; */
  padding-left: 20px;
`;

const IssueCommentsImg = styled.img`
  width: 16px;
  /* outline: 2px solid red; */
  display: inline-block;
  position: relative;
  top: 4px;
  left: -8px;
`;
