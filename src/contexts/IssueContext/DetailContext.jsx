import { createContext, useState } from 'react';
import { getIssueDetailItem } from '../../utils/apiUtils';

export const DetailContext = createContext();

export function DetailProvider({ children }) {
  const [issueItem, setIssueItem] = useState(null);

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
    <DetailContext.Provider value={{ issueItem, fetchIssue }}>
      {children}
    </DetailContext.Provider>
  );
}
