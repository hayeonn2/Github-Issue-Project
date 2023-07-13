import { createContext, useState } from 'react';
import { getIssueList } from '../../utils/apiUtils';

export const IssueContext = createContext();

export function IssueProvider({ children }) {
  const [issueList, setIssueList] = useState([]);

  const fetchIssueList = async () => {
    try {
      const data = await getIssueList();
      setIssueList(data);
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <IssueContext.Provider value={{ issueList, fetchIssueList }}>
      {children}
    </IssueContext.Provider>
  );
}
