import remarkGfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { IssueContext } from '../../contexts';

export function IssueDetail() {
  const { number } = useParams();
  const { issueItem, fetchIssue } = useContext(IssueContext);

  useEffect(() => {
    fetchIssue(parseInt(number));
  }, []);

  return (
    <div>
      <h3>Issue #{issueItem?.number}</h3>
      <p>title : {issueItem?.title}</p>
      <p>작성자: {issueItem?.user.login}</p>
      <p>작성일: {issueItem?.create_at}</p>
      <p>코멘트 수: {issueItem?.comments}</p>
      <p>
        <img src={issueItem?.user.avatar_url} alt="작성자 프로필 이미지" />
      </p>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {issueItem?.body}
      </ReactMarkdown>
    </div>
  );
}
