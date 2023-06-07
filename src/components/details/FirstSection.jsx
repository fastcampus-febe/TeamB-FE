import React from 'react';
import styled from 'styled-components';
import styles from '@styles/designSystem.module.scss';
import getBgColor from '@utils/bgColorGen';

const FirstSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  padding: 0px;
  gap: 16px;
  flex: 0;
`;

const FirstSectionLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 16px;
  background-color: aliceblue;
  flex: 7 0 70px;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

const FirstSectionRight = styled.div`
  flex: 5 0 50px;
  line-height: 1.5em;

  div.padding {
    padding: 16px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    box-sizing: border-box;

    gap: 1.5em;
  }
  div.flags {
    display: flex;
  }
`;

const Flag = styled.div`
  background-color: ${(props) => getBgColor(props.color) || 'black'};
  color: ${(props) => props.color || 'black'};
  font-size: 14px;
  padding: 2px 8px;
  border-radius: 4px;
  margin-right: 8px;
  font-weight: 600;
`;

const Tags = styled.div`
  background-color: ${(props) => getBgColor(props.color) || 'black'};
  color: ${(props) => props.color || 'black'};
  font-size: 14px;
  padding: 2px 8px;
  border-radius: 4px;
  margin-right: 8px;
  font-weight: 600;
`;

const Rating = styled.div`
  color: #555;
  ::before {
    content: '★';
  }
`;

const index = ({ tour }) => {
  function textEnter(text) {
    text = text.replace(/다\./g, '다.\n');
    text = text.replace(/\<br\>/g, '');
    const array = text.split('\n');
    array.pop();
    // console.log('array ', array);

    const result = array.map((item, index) => {
      return <p key={`text0${index}`}>{item}</p>;
    });

    return result;
  }

  function getFlags() {
    const flags = [];
    flags.push(
      <Flag key="tourType" color={'#1B5E20'}>
        {tour.cat3}
      </Flag>
    );
    if (tour.inOut && tour.inOut.length > 0) {
      flags.push(
        <Flag key="inOut" color={'#E65100'}>
          {tour.inOut}
        </Flag>
      );
    }
    if (tour.userseason && tour.userseason.length > 0) {
      flags.push(
        <Flag key="userSeason" color={'#B71C1C'}>
          {tour.userseason}
        </Flag>
      );
    }
    if (tour.heritage1 === '1' && tour.heritage1.length > 0) {
      flags.push(
        <Flag key="heritage1" color={'#880E4F'}>
          세계기록유산
        </Flag>
      );
    }
    if (tour.heritage2 === '1' && tour.heritage2.length > 0) {
      flags.push(
        <Flag key="heritage2" color={'#4A148C'}>
          세계자연유산
        </Flag>
      );
    }
    if (tour.heritage3 === '1' && tour.heritage3.length > 0) {
      flags.push(
        <Flag key="heritage3" color={'#311B92'}>
          세계문화유산
        </Flag>
      );
    }

    return flags;
  }

  function getTags() {
    const tags = [];
    if (tour.tagList && tour.tagList.length > 0) {
      tour.tagList.forEach((tag) => {
        tags.push(<Tags key={tag}>{tag}</Tags>);
      });
    }
    return tags;
  }

  // console.log('first', tour);
  return tour.title ? (
    <FirstSection>
      <FirstSectionLeft>
        <img src={tour.firstimage}></img>
      </FirstSectionLeft>
      <FirstSectionRight>
        <div className={'padding'}>
          <div className="flags">{getFlags()}</div>
          <div className={styles.title}>{tour.title}</div>
          <div>{textEnter(tour.overview)}</div>
          <div>{tour.addr1}</div>
          <Rating>{tour.rate}</Rating>
          <div>관광지 태그</div>
          <div>관광지 편의 시설</div>
        </div>
      </FirstSectionRight>
    </FirstSection>
  ) : (
    'noTitle'
  );
};

export default index;
