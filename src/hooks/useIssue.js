import { useContext } from 'react';
import { DetailContext, ListContext } from '../contexts';

export const useIssueList = () => useContext(ListContext);
export const useDetailIssue = () => useContext(DetailContext);
