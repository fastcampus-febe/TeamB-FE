import React from 'react';
import styled from 'styled-components';

const DetailInfo = ({ tour }) => {
  console.log(tour);
  return (
    <Wrap>
      <h3>상세 정보</h3>
      <Essential>
        <li>
          <strong>위치</strong>
          <span>{tour.addr1 ? tour.addr1 : '정보 없음'}</span>
        </li>
        <li>
          <strong>실외/실내</strong>
          <span>{tour.inOut ? tour.inOut : '정보 없음'}</span>
        </li>
        <li>
          <strong>홈페이지</strong>
          <span>{tour.hompage ? tour.hompage : '정보 없음'}</span>
        </li>
        <li>
          <strong>문의</strong>
          <span>{tour.infocenter ? tour.infocenter : '정보 없음'}</span>
        </li>
        <li>
          <strong>주차시설</strong>
          <span>{tour.parking ? tour.parking : '정보 없음'}</span>
        </li>
        <li>
          <strong>이용시간</strong>
          <span>{tour.usetime ? tour.usetime : '정보 없음'}</span>
        </li>
        <li>
          <strong>휴무</strong>
          <span>{tour.restdate ? tour.restdate : '정보 없음'}</span>
        </li>
      </Essential>
    </Wrap>
  );
};

const Wrap = styled.div`
  height: 1000px;
  box-sizing: border-box;
  padding: 30px 20px;
  h3 {
    color: #2f2f2f;
    font-size: 20px;
    font-weight: 700;
    padding-bottom: 20px;
    margin: 0 40px;
    box-sizing: border-box;
    border-bottom: 1px solid #eaebed;
  }
`;

const Essential = styled.ul`
  font-size: 15px;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
  li {
    float: left;
    display: table;
    width: 50%;
    padding: 10px 40px 10px 10px;
    box-sizing: border-box;
    color: #676767;
    strong {
      font-weight: 600;
      display: table-cell;
      width: 100px;
      padding-right: 10px;
      ::before {
        content: '▪️ ';
      }
    }
    span {
      display: table-cell;
      width: auto;
      text-align: left;
      line-height: 1rem;
    }
  }
`;

export default DetailInfo;
