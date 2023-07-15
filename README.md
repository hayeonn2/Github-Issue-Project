# 📚 프로젝트
[특정 github 레포지토리](https://github.com/facebook/react/issues)의 이슈 목록과 상세 내용을 확인하는 웹 사이트 구축

<br/>

## 📖 구현기능
1. 이슈 리스트 화면
  - 이슈 리스트 가져오기 API 활용
  - '이슈번호, 이슈제목, 작성자, 작성일, 코멘트 수' 표시
  - 다섯번째 셀마다 광고 이미지 출력
  - 화면을 아래로 스크롤 할 때 이슈 리스트 추가 로딩(인피니티 스크롤)
2. 이슈 상세 화면
  - 이슈의 상세 내용 표시
  - '이슈번호, 이슈제목, 작성자, 작성일, 코멘트 수, 작성자 프로필 이미지, 본문' 표시

<br/>

# 🪄 구동화면
![화면](https://github.com/hayeonn2/Github-Issue-Project/assets/111109573/525b6b83-bb1c-47d1-a165-6323cb20b60b)

<br />

# 🎉 배포링크
https://hayeonn2-github-issue-project.netlify.app/

<br />

# 🚀 실행방법
```
$ npm install
$ process.env.REACT_APP_GIT_ISSUE_ACCESS_TOKEN="<개인Token>"
$ npm  start
```

<br/>

# 💻 개발환경
- 언어 : javascript
- 라이브러리 및 프레임워크: react, axios, styled-components, react-router-dom, react-markdown
- 배포 : netlify

<br/>


