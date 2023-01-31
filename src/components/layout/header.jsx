import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { RiLoginCircleLine } from 'react-icons/Ri';
import { AiFillHeart } from 'react-icons/Ai';
import { useEffect } from 'react';
import { kakaoLoad } from '@atom/loadAtom';
import { useRecoilState } from 'recoil';

const Header = () => {
  const [test, setTest] = useRecoilState(kakaoLoad);

  useEffect(() => {
    if (!import.meta.env.VITE_KAKAO) return;
    if (test) return;

    const script = document.createElement('script');
    script.async = true;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${
      import.meta.env.VITE_KAKAO
    }&autoload=false`;
    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        setTest(true);
      });
    };
  }, []);

  return (
    <Container>
      <Inner>
        <Logo>
          <Link to={'/'}>
            <img src="/assets/mainlogo.png" alt="logo" />
          </Link>
        </Logo>
        <Menu>
          <Link to={'/'} className="like">
            <AiFillHeart className="icon" />
            <p>찜 목록</p>
          </Link>
          <Link to={'/'} className="mapage">
            <RiLoginCircleLine className="icon" />
            <p>로그인</p>
          </Link>
        </Menu>
      </Inner>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 65px;
  padding: 10px 0;
  border-bottom: 2px solid #eee;
`;

const Inner = styled.div`
  width: 1136px;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-content: center;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 170px;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  p {
    font-size: 14px;
    font-weight: 600;
    margin-right: 20px;
    color: #676767;
  }
  .mapage,
  .like {
    display: flex;
    align-items: center;
    .icon {
      color: #2358c5;
      font-size: 20px;
      padding-right: 5px;
      padding-bottom: 2px;
    }
  }
`;
export default Header;
