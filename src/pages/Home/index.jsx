import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';
import Lottie from 'lottie-react';
import raindrop from '@lottie/raindrop.json';
import sun from '@lottie/sun.json';
import cloudsun from '@lottie/cloudsun.json';
import thunder from '@lottie/thunder.json';
import cloud from '@lottie/cloud.json';
import flikr from '@lottie/flikr.json';
import frame from '@lottie/frame.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import HashTagModal from '@/components/modal/HashTagModal';
import LocationModal from '@/components/modal/LocationModal';
import locationData from '@/data/locationData';
import hashtagData from '@/data/hashTagData';

const Home = () => {
  const [locationList, setLocationList] = useState([]);
  const [hashtagList, seHashtagList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setLocationList(locationData);
    seHashtagList(hashtagData);
  }, []);

  const locationModal = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <LocationModal
            onClose={onClose}
            locationList={locationList}
            BiSearch={BiSearch}
            navigate={navigate}
          />
        );
      },
    });
  };

  const hashTagModal = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <HashTagModal
            onClose={onClose}
            hashtagList={hashtagList}
            BiSearch={BiSearch}
            navigate={navigate}
          />
        );
      },
    });
  };

  return (
    <Container>
      <Swiper
        dir="rtl"
        slidesPerView={3}
        spaceBetween={80}
        allowTouchMove={false}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={6000}
        loop={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Lottie animationData={sun} loop={true}></Lottie>
        </SwiperSlide>
        <SwiperSlide>
          <Lottie animationData={cloudsun} loop={true}></Lottie>
        </SwiperSlide>
        <SwiperSlide>
          <Lottie animationData={raindrop} loop={true}></Lottie>
        </SwiperSlide>
        <SwiperSlide>
          <Lottie animationData={frame} loop={true}></Lottie>
        </SwiperSlide>
        <SwiperSlide>
          <Lottie animationData={thunder} loop={true}></Lottie>
        </SwiperSlide>
        <SwiperSlide>
          <Lottie animationData={flikr} loop={true}></Lottie>
        </SwiperSlide>
        <SwiperSlide>
          <Lottie animationData={cloud} loop={true}></Lottie>
        </SwiperSlide>
      </Swiper>

      <SearchChoice>
        <h1>검색방법을 선택해주세요!</h1>
        <button onClick={locationModal}>지역</button>
        <button onClick={hashTagModal}>태그</button>
      </SearchChoice>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 85vh;
  background-color: #fbfbfb;
`;

const SearchChoice = styled.div`
  width: 80vw;
  margin: 20px auto 0;
  display: flex;
  gap: 30px;
  h1 {
    font-family: SBAggroB;
    font-size: 4vw;
    margin-right: 30px;
  }
  button {
    background-color: #2358c5;
    border: none;
    width: 120px;
    height: 63px;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    border-radius: 15px;
    box-shadow: 0 8px 16px 0 rgb(32 32 32 / 10%);
    cursor: pointer;
    &:last-child {
      background-color: #bacaea;
      color: #0f0f0f;
    }
  }
`;

export default Home;
