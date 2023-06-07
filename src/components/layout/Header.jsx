import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
import { AiFillHeart } from 'react-icons/ai';
import { FaCoffee } from 'react-icons/fa';
import { kakaoLoad } from '@atom/loadAtom';
import { useRecoilState } from 'recoil';

const Header = () => {
  const [test, setTest] = useRecoilState(kakaoLoad);
  const [value, setValue] = useState('');
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleChange = (e) => {
    let { value } = e.target;
    setValue(value);
  };

  const handleSubmit = () => {
    return navigate(`/search?keyword=${value}`);
  };

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
  }, [pathname]);

  return (
    <Container pathname={pathname}>
      <Inner>
        <Logo>
          <Link to={'/'}>
            <img src="/assets/mainlogo.png" alt="logo" />
          </Link>
        </Logo>
        <SearchForm>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              id="search-input"
              type="text"
              value={value}
              placeholder="검색어를 입력해 주세요"
              onChange={(e) => handleChange(e)}
            />
            <button
              aria-label="submit"
              onClick={() => {
                handleSubmit(value);
                setValue('');
              }}
            >
              <BiSearch size="24" color="#2358c5" />
            </button>
          </form>
        </SearchForm>
        <Menu>
          <Link to={'/wish'} className="wish">
            <AiFillHeart className="icon" />
            <p>위시리스트</p>
          </Link>
          <Link to={'/'} className="sponsor">
            <FaCoffee className="icon" />
            <p>후원하기</p>
          </Link>
        </Menu>
      </Inner>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: ${(props) => (props.pathname === '/' ? '15vh' : '100px')};
  background-color: ${(props) => (props.pathname === '/' ? '#fbfbfb' : '#fff')};
  border-bottom: ${(props) => (props.pathname === '/' ? 'none' : '2px solid #eee')};
  box-sizing: border-box;
`;

const Inner = styled.div`
  width: 72vw;
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

const SearchForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  form {
    position: relative;
  }
  input {
    width: 20vw;
    height: 45px;
    font-size: 14px;
    box-sizing: border-box;
    border: 1px solid #2358c5;
    border-radius: 8px;
    padding: 10px 10px 10px 15px;
    outline: none;
    &:placeholder {
      color: #eaebed;
    }
  }
  button {
    border: none;
    background-color: transparent;
    position: absolute;
    top: 10px;
    right: 5px;
    cursor: pointer;
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
  .sponsor,
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
    }
  }
`;
export default Header;
