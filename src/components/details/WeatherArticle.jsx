import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import Lottie from 'lottie-react';

import cloud from '@lottie/cloud.json';
import cloudsun from '@lottie/cloudsun.json';
import sun from '@lottie/sun.json';
import thunder from '@lottie/thunder.json';
import mist from '@lottie/mist.json';
import rain from '@lottie/rain-sunny.json';
import snow from '@lottie/snow-sunny.json';

import { getWeather } from '../../api/api';

const lotties = {
  cloud,
  cloudsun,
  sun,
  thunder,
  mist,
  rain,
  snow,
};

const weatherValue = {
  맑음: 'sun',
  구름많음: 'cloudsun',
  흐림: 'mist',
  '구름많고 비': 'rain',
  비: 'cloud',
  '구름많고 눈': 'snow',
  눈: 'snow',
  '구름많고 비/눈': 'rain',
  '흐리고 비': 'rain',
  '흐리고 눈': 'snow',
  '흐리고 비/눈': 'rain',
};

//<Lottie animationData={lotties[]} loop={true}></Lottie>

const RootArticle = styled.article`
  display: flex;
  flex-direction: row;
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
      const flat = Object.values(res.data.data).reduce((acc, cur) => [...acc, ...cur], []);
      setWeathers(flat);
      console.log(flat);
    });
  }, [tour.contentid]);

  return (
    weathers && (
      <RootArticle id={id}>
        {weathers.map((item) => (
          <div key={item.localDate}>
            시간 : {item.localDate}
            최고 : {item.highTemp}
            최저 : {item.lowTemp}
            강수 확률 : {item.rainProbabilityAm || item.rainProbability}
            <Lottie
              animationData={lotties[`${weatherValue[`${item.weatherAm || item.weather}`]}`]}
              loop={true}
            ></Lottie>
          </div>
        ))}
      </RootArticle>
    )
  );
};

export default index;
