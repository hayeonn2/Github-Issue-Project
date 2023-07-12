import { useEffect } from 'react';
import { useFetchGithub } from '../../contexts/IssueContext/useFetchGithub';

export function IssueList() {
  const { issueList, fetchIssueList } = useFetchGithub();

  useEffect(() => {
    fetchIssueList();
  }, []);

  return (
    <main>
      <ul>
        {issueList &&
          issueList.map((item) => (
            <li key={item.id}>
              <span>{item.number}</span>
              <span>{item.title}</span>
            </li>
          ))}
      </ul>
    </main>
  );
}
