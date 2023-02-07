import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { AiFillHeart } from 'react-icons/Ai';
import { kakaoLoad } from '@atom/loadAtom';
import { useRecoilState } from 'recoil';

const Header = () => {
  const [test, setTest] = useRecoilState(kakaoLoad);
  const [mainPath, setMainPath] = useState(false);
  const { pathname } = useLocation();
  console.log(pathname);

  useEffect(() => {
    if (!import.meta.env.VITE_KAKAO) return;
    if (test) return;
    if (pathname === '/') setMainPath(true);

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
  }, [pathname]);

  return (
    <Container mainPath={mainPath}>
      <Inner>
        <Logo>
          <Link to={'/'}>
            <img src="/assets/mainlogo.png" alt="logo" />
          </Link>
        </Logo>
        <Menu>
          <Link to={'/wish'} className="wish">
            <AiFillHeart className="icon" />
            <p>위시리스트</p>
          </Link>
          <Link to={'/'} className="mapage">
            {/* <BiCoffee className="icon" /> */}
            <p>후원하기</p>
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
  border-bottom: ${(props) => (props.pathname === '/' ? 'none' : '2px solid #eee')};
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
    color: #676767;
  }
  .login,
  .wish {
    display: flex;
    align-items: center;
    padding: 10px 15px;
    border-radius: 10px;
    :hover {
      background-color: #f4f4f4;
      transition: 0.2s;
    }
    .icon {
      color: #2358c5;
      font-size: 20px;
      padding-right: 5px;
      padding-bottom: 2px;
    }
  }
`;
export default Header;
