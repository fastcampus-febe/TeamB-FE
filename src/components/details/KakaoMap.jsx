import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { kakaoLoad } from '@atom/loadAtom';
import { useRecoilValue } from 'recoil';

const RootArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 1136px;
  height: 50vh;
  min-height: 320px;

  background-color: #f5f5f5;
`;

const MapRegion = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
`;
// 아이디는 더 내려가서 제목에 넣는다.
const Index = ({ id, tour }) => {
  const kakaoState = useRecoilValue(kakaoLoad);
  const { address, mapX, mapY, title } = tour;
  console.log(address, mapX, mapY, title);
  console.log('내려온 형태', tour);
  useEffect(() => {
    console.log('kakaoState', kakaoState);
    if (!kakaoState) return;
    kakao.maps.load(function () {
      const container = document.getElementById('kakao');
      const options = {
        center: new kakao.maps.LatLng(mapY, mapX),
        level: 1,
      };
      const map = new kakao.maps.Map(container, options);

      const markerPosition = new kakao.maps.LatLng(mapY, mapX);

      // 마커를 생성합니다
      const marker = new kakao.maps.Marker({
        position: markerPosition,
      });

      // 마커가 지도 위에 표시되도록 설정합니다
      marker.setMap(map);

      // 인포윈도우로 장소에 대한 설명을 표시합니다
      var iwContent = `<div style="padding:5px;">${title}</div>`, // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
        iwPosition = new kakao.maps.LatLng(mapY, mapX); //인포윈도우 표시 위치입니다

      // 인포윈도우를 생성합니다
      const infowindow = new kakao.maps.InfoWindow({
        position: iwPosition,
        content: iwContent,
      });

      // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
      infowindow.open(map, marker);
    });
  }, [kakaoState]);

  return (
    <RootArticle>
      <MapRegion id={id}>
        <div>{tour.addr1}</div>
      </MapRegion>
      <RootArticle id="kakao"></RootArticle>
    </RootArticle>
  );
};

export default Index;
