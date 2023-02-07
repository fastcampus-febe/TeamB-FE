import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BiSearch } from 'react-icons/Bi';
import Lottie from 'lottie-react';
import raindrop from '@/lottie/raindrop.json';
import sun from '@/lottie/sun.json';
import cloudsun from '@/lottie/cloudsun.json';
import thunder from '@//lottie/thunder.json';
import cloud from '@/lottie/cloud.json';
import flikr from '@/lottie/flikr.json';
import frame from '@/lottie/frame.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import LocationModal from '@/components/modal/LocationModal';
import locationData from '@/data/locationData';

const Home = () => {
  const [locationList, setLocationList] = useState([]);
  const [location, setLocation] = useState('');

  useEffect(() => {
    async function getData() {
      try {
        //const response = await locationData();
        const response = await locationData;
        setLocationList(response);
      } catch (error) {
        console.log('에러가 발생했습니다.');
      }
    }
    getData();
  }, []);

  const locationModal = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <LocationModal onClose={onClose} locationList={locationList} setLocation={setLocation} />
        );
      },
    });
  };

  return (
    <Container>
      <Swiper
        dir="rtl"
        slidesPerView={2.8}
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

      <Location>
        <h1>어디로 가시겠어요?</h1>
        <input onClick={locationModal} defaultValue={location} type="text" />
        <button>
          <BiSearch className="icon" />
        </button>
      </Location>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 3000px;
`;

const Location = styled.div`
  width: 1400px;
  margin: 40px auto 0;
  display: flex;
  gap: 20px;
  h1 {
    font-family: SBAggroB;
    font-size: 4vw;
  }
  input {
    border: none;
    border-radius: 15px;
    padding: 0 20px;
    box-shadow: 0 8px 16px 0 rgb(32 32 32 / 8%);
  }
  button {
  }
`;

export default Home;
