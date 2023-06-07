import React from 'react';
import { Link } from 'react-router-dom';
import { DiGithubBadge } from 'react-icons/di';
import styled from 'styled-components';

const Footer = () => {
  return (
    <>
      <Container>
        <FooterText>
          <Logo>
            <Link to={'/'}>
              <img src="/assets/mainlogo.png" alt="logo" />
            </Link>
          </Logo>
          <p>
            가고싶은 관광지의 날씨 정보를 제공하는 관광지 추천 서비스
            <br />
            백엔드 프론트 엔드 협업 사이드 프로젝트
            <br />
          </p>
        </FooterText>
        <FooterContent>
          <FooterList>
            <ul>
              <li>
                <a href="https://github.com/fastcampus-febe/TeamB-BE" target="_blank">
                  Backend Github
                  <DiGithubBadge className="icon" />
                </a>
              </li>
              <li>
                <a href="https://github.com/fastcampus-febe/TeamB-FE" target="_blank">
                  Frontend Github
                  <DiGithubBadge className="icon" />
                </a>
              </li>
              <li>
                <Link to={'/'}>후원하기</Link>
              </li>
            </ul>
          </FooterList>
          <ApiLogo>
            <ul>
              <li>
                <a href="https://api.visitkorea.or.kr/#/" target="_blank" title="TourAPI 4.0">
                  <img src="/assets/tour-logo.png" alt="TourAPI 4.0" />
                </a>
              </li>
              <li>
                <a href="https://www.data.go.kr/" target="_blank" title="공공데이터포털">
                  <img src="/assets/data-logo.png" alt="공공데이터포털" />
                </a>
              </li>
            </ul>
          </ApiLogo>
        </FooterContent>
      </Container>
      <Copyright>
        <p>© 2023. fastcampus-febe TeamB All rights reserved.</p>
      </Copyright>
    </>
  );
};

const Container = styled.div`
  padding: 50px 13.5vw 30px;
  background-color: #f3f6f8;
  display: flex;
  justify-content: space-between;
`;

const Copyright = styled.div`
  background-color: #f3f6f8;
  padding: 0 13.5vw;
  p {
    border-top: 1px solid #e6ebee;
    padding: 22px 0;
    font-size: 13px;
    text-align: center;
    color: #646464;
  }
`;

const FooterText = styled.div`
  display: flex;
  flex-flow: column;
  gap: 20px;
  p {
    font-size: 12px;
    line-height: 28px;
    color: #7e858a;
    font-weight: bold;
  }
`;

const Logo = styled.div`
  width: 120px;
  img {
    width: 100%;
  }
`;

const FooterContent = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
`;

const FooterList = styled.div`
  display: flex;
  ul {
    display: flex;
    align-items: center;
    gap: 50px;
    li {
      font-size: 14px;
      font-weight: bold;
      a {
        color: #7e858a;
        display: flex;
        align-items: center;
        .icon {
          font-size: 22px;
          padding-left: 3px;
        }
      }
    }
  }
`;

const ApiLogo = styled.div`
  display: flex;
  justify-content: flex-end;
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    li {
      width: 90px;
      img {
        width: 100%;
      }
    }
  }
`;

export default Footer;
