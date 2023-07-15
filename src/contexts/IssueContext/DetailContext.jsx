import { createContext, useState } from 'react';
import { getIssueDetailItem } from '../../api/issue';

export const DetailContext = createContext();

export function DetailProvider({ children }) {
  const [issueItem, setIssueItem] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchIssue = async (number) => {
    setIsLoading(true);
    try {
      const data = await getIssueDetailItem(number);
      setIssueItem(data);
      return data;
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <DetailContext.Provider value={{ issueItem, fetchIssue, isLoading, error }}>
      {children}
    </DetailContext.Provider>
  );
}
