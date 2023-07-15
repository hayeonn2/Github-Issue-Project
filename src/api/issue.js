import { api } from './api';

const OWNER = 'facebook';
const REPO = 'react';

export const getIssueList = async (page, perPage) => {
  try {
    const response = await api.get(
      `https://api.github.com/repos/${OWNER}/${REPO}/issues?per_page=${perPage}&page=${page}&sort=comments`
    );
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
    throw new Error(String(err));
  }
};

export const getIssueDetailItem = async (number) => {
  try {
    const response = await api.get(
      `https://api.github.com/repos/${OWNER}/${REPO}/issues/${number}`
    );
    console.log(response.data);
    return response.data;
  } catch (err) {
    throw new Error(String(err));
  }
};
