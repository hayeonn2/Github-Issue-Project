import axios from 'axios';

// eslint-disable-next-line no-undef
const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;

export const api = axios.create({
  headers: {
    'X-GitHub-Api-Version': '2022-11-28',
    Accept: `application/vnd.github+json`,
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
});
