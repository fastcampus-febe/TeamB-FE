import React from 'react';
import styled from 'styled-components';

const RootArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 1136px;
  height: 2000px;

  background-color: #f5f5f5;
`;
// 아이디는 더 내려가서 제목에 넣는다.
const index = ({ id }) => {
  return <RootArticle id={id}>hello{`${id}`}</RootArticle>;
};

export default index;
