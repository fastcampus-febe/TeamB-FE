import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DetailInfoIcon from './DetailInfoIcon';

const DetailInfo = ({ tour, id }) => {
  console.log(tour);
  const [optional, setOptional] = useState([]);

  useEffect(() => {
    function optionalCheck(tour) {
      const optionalList = [];
      tour.chkbabycarriage === '있음' ? optionalList.push('유모차 대여') : null;
      tour.chkpet === '가능' ? optionalList.push('반려동물 동반') : null;
      tour.chkcreditcard === '가능' ? optionalList.push('신용카드 결제') : null;
      tour.expagerange ? optionalList.push(`체험 연령 ${tour.expagerange}`) : null;
      tour.heritage1 === '1' ? optionalList.push('세계 문화 유산') : null;
      tour.heritage2 === '1' ? optionalList.push('세계 자연 유산') : null;
      tour.heritage3 === '1' ? optionalList.push('세계 기록 유산') : null;
      setOptional(optionalList);
    }
    optionalCheck(tour);
  }, [tour]);

  console.log(optional);

  return (
    <Wrap>
      <h3 id={id}>상세 정보</h3>
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
          <strong>체험 안내</strong>
          <span>{tour.expguide ? tour.expguide : '정보 없음'}</span>
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
      <Optional>
        {optional.map((x) => {
          return (
            <Card key={x}>
              <DetailInfoIcon name={x} className="icon" />
              <p>{x}</p>
            </Card>
          );
        })}
      </Optional>
    </Wrap>
  );
};

const Wrap = styled.div`
  border: 1px solid #eee;
  height: auto;
  box-sizing: border-box;
  padding: 30px 20px;
  display: flex;
  flex-wrap: wrap;
  h3 {
    color: #2f2f2f;
    width: 100%;
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

const Optional = styled.div`
  display: grid;
  width: 100%;
  height: 2000px;
  flex-wrap: wrap;
  padding: 40px;
  align-content: flex-start;
  justify-content: center;
  align-content: flex-start;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
`;

const Card = styled.div`
  padding: 20px 40px;
  width: 300px;
  box-sizing: border-box;
  height: 150px;
  border: 2px solid #eee;
  border-radius: 20px;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  p {
    font-size: 17px;
    color: #676767;
  }
`;

export default DetailInfo;
