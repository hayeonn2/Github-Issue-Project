import { createContext, useState } from 'react';
import { getIssueList } from '../../api/issue';

export const ListContext = createContext();

export function ListProvider({ children }) {
  const [issueList, setIssueList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchIssueList = async (perPage, page) => {
    setIsLoading(true);
    try {
      const data = await getIssueList(perPage, page);
      setIssueList(data);
      return data;
    } catch (err) {
      console.error('err::::', err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ListContext.Provider
      value={{ issueList, fetchIssueList, isLoading, error }}
    >
      {children}
    </ListContext.Provider>
  );
}
