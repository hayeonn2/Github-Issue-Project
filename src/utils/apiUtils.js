import axios from 'axios';

// eslint-disable-next-line no-undef
const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;

export const getIssueList = async (perPage, page) => {
  try {
    const response = await axios.get(
      `https://api.github.com/repos/facebook/react/issues?per_page=${perPage}&page=${page}&sort=comments`,
      {
        headers: {
          Accept: `application/vnd.github+json`,
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
