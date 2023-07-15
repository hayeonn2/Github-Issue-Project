import { useEffect } from 'react';
import styled from 'styled-components';
import { Loading } from '../Loading/Loading';
import { useIssueList } from '../../hooks/useIssue';
import { IssueListItem } from '../IssueListItem/IssueListItem';
import { Advertisement } from '../Advertisement/Advertisement';

export function IssueList() {
  const { issueList, isLoading, fetchIssueList } = useIssueList();

  useEffect(() => {
    fetchIssueList();
  }, []);

  // const PER_PAGE = 10;
  // const [pageInfo, setPageInfo] = useState({
  //   page: 1,
  //   totalPage: 100,
  // });

  return !isLoading ? (
    <IssueWrap>
      {issueList &&
        issueList.map((item, idx) =>
          (idx + 1) % 4 === 0 ? (
            <IssueListItem key={item.id} item={item}>
              <Advertisement />
            </IssueListItem>
          ) : (
            <IssueListItem key={item.id} item={item} />
          )
        )}
    </IssueWrap>
  ) : (
    <Loading />
  );
}

const IssueWrap = styled.ul`
  list-style: none;
  width: 1000px;
  margin: 0 auto;
  padding: 0;
`;
