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
import LocationModal from '@/components/modal/LocationModal';
import locationData from '@/data/locationData';

const Home = () => {
  const [locationList, setLocationList] = useState([]);
  const [location, setLocation] = useState('');
  const [areaCode, setAreaCode] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = (location, areaCode) => {
    return navigate(`/search?location=${location}&areacode=${areaCode}`);
  };

  useEffect(() => {
    setLocationList(locationData);
  }, []);

  const locationModal = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <LocationModal
            onClose={onClose}
            locationList={locationList}
            setLocation={setLocation}
            setAreaCode={setAreaCode}
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

      <Location>
        <h1>어디로 가시겠어요?</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input onClick={locationModal} defaultValue={location} type="text" readOnly />
          <button
            aria-label="submit"
            onClick={() => {
              handleSubmit(location, areaCode);
            }}
          >
            <BiSearch size="26" color="#fff" />
          </button>
        </form>
      </Location>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 85vh;
  background-color: #fbfbfb;
`;

const Location = styled.div`
  width: 80vw;
  margin: 20px auto 0;
  display: flex;
  gap: 20px;
  h1 {
    font-family: SBAggroB;
    font-size: 4.5vw;
  }
  form {
    display: flex;
    gap: 20px;
    input {
      border: none;
      border-radius: 15px;
      box-shadow: 0 8px 16px 0 rgb(32 32 32 / 10%);
      box-sizing: border-box;
      padding: 0 20px;
      margin-left: 30px;
      height: 65px;
      font-size: 20px;
      &:focus {
        outline: 2px solid #2358c5;
      }
    }
    button {
      background: #2358c5;
      border: none;
      width: 65px;
      height: 65px;
      border-radius: 15px;
      box-shadow: 0 8px 16px 0 rgb(32 32 32 / 10%);
      cursor: pointer;
    }
  }
`;

export default Home;
