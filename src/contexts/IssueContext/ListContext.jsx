import { createContext, useState } from 'react';
import { getIssueList } from '../../api/issue';

export const ListContext = createContext();

export function ListProvider({ children }) {
  const [issueList, setIssueList] = useState([]);

  const fetchIssueList = async (perPage, page) => {
    try {
      const data = await getIssueList(perPage, page);
      setIssueList(data);
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <ListContext.Provider value={{ issueList, fetchIssueList }}>
      {children}
    </ListContext.Provider>
  );
}
