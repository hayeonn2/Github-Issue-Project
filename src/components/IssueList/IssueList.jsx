import { useEffect } from 'react';
import styled from 'styled-components';
import { useFetchGithub } from '../../contexts/';
import { IssueListItem } from '../IssueListItem/IssueListItem';
import { Advertisement } from '../Advertisement/Advertisement';

export function IssueList() {
  const { issueList, fetchIssueList } = useFetchGithub();

  useEffect(() => {
    fetchIssueList();
  }, []);

  return (
    <IssueWrap>
      {issueList.map((item, idx) =>
        (idx + 1) % 5 === 0 ? (
          <IssueListItem key={item.id} item={item}>
            <Advertisement />
          </IssueListItem>
        ) : (
          <IssueListItem key={item.id} item={item} />
        )
      )}
    </IssueWrap>
  );
}

const IssueWrap = styled.ul`
  list-style: none;
  width: 1000px;
  margin: 0 auto;
  padding: 0;
`;
