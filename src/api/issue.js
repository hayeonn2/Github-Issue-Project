import { api } from './api';

export const getIssueList = async (page, perPage) => {
  try {
    const response = await api.get(
      `https://api.github.com/repos/facebook/react/issues?per_page=${perPage}&page=${page}&sort=comments`
    );
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getIssueDetailItem = async (number) => {
  try {
    const response = await api.get(
      `https://api.github.com/repos/facebook/react/issues/${number}`
    );
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
