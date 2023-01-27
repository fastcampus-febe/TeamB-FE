import React from 'react';
import Lottie from 'lottie-react';
import style from './NotFound.module.scss';
import notFound from './lottie/not-found.json';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className={style.notFound}>
      <div className={style.lottie}>
        <Lottie animationData={notFound} loop={true}></Lottie>
      </div>
      <div className={style.textBox}>
        <p className={style.text}>
          죄송합니다. 이 페이지를 사용할 수 없습니다.
          <br />
          다른 검색어로 검색해 보세요.
        </p>
      </div>
      <Link to="/">돌아가기</Link>
    </div>
  );
};

export default NotFound;
