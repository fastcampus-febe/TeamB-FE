import React from 'react';
import { FaBabyCarriage } from 'react-icons/fa';
import { FaDog } from 'react-icons/fa';
import { MdChildCare } from 'react-icons/md';
// import { heritage } from '../../utils/svg';
import styled from 'styled-components';

const DetailInfoIcon = ({ name }) => {
  console.log(name);
  if (name === '유모차 대여') {
    return (
      <Icon>
        <FaBabyCarriage className="icon" />
      </Icon>
    );
  }
  if (name === '반려동물 동반') {
    return (
      <Icon>
        <FaDog className="icon" />
      </Icon>
    );
  }
  if (name.includes('체험 연령')) {
    return (
      <Icon>
        <MdChildCare className="icon" />
      </Icon>
    );
  }
  if (name === '세계 문화 유산') {
    return (
      <Icon>
        <div className="heritage"></div>
      </Icon>
    );
  }
  if (name === '세계 자연 유산') {
    return (
      <Icon>
        <div className="nature"></div>
      </Icon>
    );
  }
  if (name === '세계 기록 유산') {
    return (
      <Icon>
        <div className="history"></div>
      </Icon>
    );
  }
};

const Icon = styled.div`
  padding-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  .icon {
    font-size: 32px;
    color: #2358c5;
  }
  .heritage {
    background-image: url('/assets/noun-heritage-building-4431636.svg');
    width: 60px;
    height: 40px;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    margin-bottom: -5px;
  }
  .history {
    background-image: url('/assets/noun-history-5487538.svg');
    width: 45px;
    height: 45px;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    margin-bottom: -10px;
  }
  .nature {
    background-image: url('/assets/noun-nature-1998963.svg');
    width: 45px;
    height: 45px;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    margin-bottom: -10px;
  }
`;

export default DetailInfoIcon;
