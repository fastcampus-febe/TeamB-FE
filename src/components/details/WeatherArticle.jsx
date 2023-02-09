import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import Lottie from 'lottie-react';
import raindrop from '@lottie/raindrop.json';
import sun from '@lottie/sun.json';
import cloudsun from '@lottie/cloudsun.json';
import thunder from '@lottie/thunder.json';
import cloud from '@lottie/cloud.json';
import flikr from '@lottie/flikr.json';
import frame from '@lottie/frame.json';
import { getWeather } from '../../api/api';

const lotties = {
  raindrop,
  맑음: sun,
  '구름 많음': cloudsun,
  thunder,
  cloud,
  flikr,
  frame,
};

//<Lottie animationData={lotties[]} loop={true}></Lottie>

const RootArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 1136px;
  background-color: #f5f5f5;
`;

// 아이디는 더 내려가서 제목에 넣는다.
const index = ({ id, tour }) => {
  const [weathers, setWeathers] = useState(null);

  useEffect(() => {
    const res = getWeather(tour.mapx, tour.mapy).then((res) => {
      console.log('getWeather', res);
      const flat = Object.values(res.data.data).reduce((acc, cur) => {
        console.log('acc', acc);
        return [...acc, ...cur];
      }, []);
      console.log('flat', flat);
      setWeathers(flat);
    });
  }, [tour.contentid]);

  useCallback(() => {
    getWeather();
    console.log('날씨', tour.mapx, tour.mapy);
  }, [tour.mapx, tour.mapy]);

  return (
    weathers && (
      <RootArticle id={id}>
        hello
        {weathers.map((item) => (
          <div key={item.localDate}>
            {item.localDate}
            {item.highTemp}
            {item.lowTemp}
            {item.rainProbabilityAm}
            {item.rainProbabilityPm}
            {item.weatherAm}
            {item.weatherPm}
            {item.rainProbability}
            {item.weather}
          </div>
        ))}
      </RootArticle>
    )
  );
};

export default index;
