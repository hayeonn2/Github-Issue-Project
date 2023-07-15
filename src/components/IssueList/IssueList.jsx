import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Loading } from '../Loading/Loading';
import { ErrorPage } from '../../pages/ErrorPage';
import { useIssueList } from '../../hooks/useIssue';
import { IssueListItem } from '../IssueListItem/IssueListItem';
import { Advertisement } from '../Advertisement/Advertisement';
import useInfiniteScroll from '../../hooks/useObserver';
import ScrollObserver from '../ScrollObserver/ScrollObserver';

export function IssueList() {
  const { issueList, fetchIssueList, error, isLoading } = useIssueList();
  const target = useRef(null);
  const Intersecting = useInfiniteScroll(target);

  useEffect(() => {
    if (Intersecting) {
      fetchIssueList();
    }
  }, [Intersecting]);

  if (error) {
    return <ErrorPage />;
  }

  return (
    <IssueWrap>
      {issueList.map((item, idx) =>
        (idx + 1) % 4 === 0 ? (
          <IssueListItem key={item.id} item={item}>
            <Advertisement />
          </IssueListItem>
        ) : (
          <IssueListItem key={item.id} item={item} />
        )
      )}
      <ScrollObserver ref={target} />
      {isLoading && <Loading />}
    </IssueWrap>
  );
}

const IssueWrap = styled.ul`
  width: 600px;
  margin: 0 auto;
  border: 1px solid #31363c;
  border-radius: 8px;
`;
