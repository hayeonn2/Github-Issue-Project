import { createContext, useState } from 'react';
import { getIssueList } from '../../api/issue';

export const ListContext = createContext();

export function ListProvider({ children }) {
  const [issueList, setIssueList] = useState([]);
  const [issueListPage, setIssueListPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchIssueList = async () => {
    setIsLoading(true);
    try {
      const data = await getIssueList(issueListPage, 10);
      console.log(issueListPage);
      setIssueListPage((prev) => prev + 1);
      setIssueList((prevList) => [...prevList, ...data]);
      setIsLoading(false);
    } catch (err) {
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
