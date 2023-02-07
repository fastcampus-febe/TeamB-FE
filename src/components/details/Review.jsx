import React from 'react';
import styled from 'styled-components';

const RootArticle = styled.article`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100%;
  box-sizing: border-box;
  max-width: 1136px;
  padding: 48px;
  border: 1px solid #eee;
  gap: 32px;

  background-color: #fff;
`;

const Rating = styled.div`
  background-image: url('/assets/star-null.png');
  width: 300px;
  height: 60px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  ::after {
    content: '';
    position: absolute;

    background-image: url('/assets/star-full.png');
    background-position: left;
    background-size: 300px 60px;
    background-repeat: no-repeat;
    width: ${(props) => props.rate * 20 - 0.4}%;
    height: 100%;
  }
`;

const RateText = styled.div`
  font-size: 24px;

  color: #333;
  span {
    font-weight: 600;
  }
`;

// 아이디는 더 내려가서 제목에 넣는다.
const index = ({ id, rate }) => {
  return (
    <RootArticle id={id}>
      <Rating rate={rate}></Rating>
      <RateText>
        평점 : <span>{`${rate}`}</span> / 5.0
      </RateText>
    </RootArticle>
  );
};

export default index;
