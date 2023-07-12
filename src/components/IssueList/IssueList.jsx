import axios from 'axios';
import { useEffect, useState } from 'react';

// eslint-disable-next-line no-undef
const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;

export function IssueList() {
  const [list, setList] = useState([]);

  const getIssueList = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/repos/facebook/react/issues`,
        {
          headers: {
            Accept: `application/vnd.github+json`,
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
        }
      );
      console.log(response.data);
      setList(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getIssueList();
  }, []);

  return (
    <main>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            <span>{item.number}</span>
            <span>{item.title}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}
