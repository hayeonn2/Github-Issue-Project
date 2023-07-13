import { createContext, useState } from 'react';
import { getIssueDetailItem, getIssueList } from '../../utils/apiUtils';

export const IssueContext = createContext();

export function IssueProvider({ children }) {
  const [issueList, setIssueList] = useState([]);
  const [issueItem, setIssueItem] = useState(null);

  const fetchIssueList = async (perPage, page) => {
    try {
      const data = await getIssueList(perPage, page);
      setIssueList(data);
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  const fetchIssue = async (number) => {
    try {
      const data = await getIssueDetailItem(number);
      setIssueItem(data);
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <IssueContext.Provider
      value={{ issueList, fetchIssueList, issueItem, fetchIssue }}
    >
      {children}
    </IssueContext.Provider>
  );
}
