import { useContext } from 'react';
import { IssueContext } from './IssueContext';

export const useFetchGithub = () => {
  const { issueList, fetchIssueList } = useContext(IssueContext);

  return { issueList, fetchIssueList };
};
