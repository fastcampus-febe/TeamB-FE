import React, { useState } from 'react';
import styled from 'styled-components';

const LocationModal = ({ hashtagList, onClose, BiSearch, navigate }) => {
  const [hashtag, setHashtag] = useState([]);
  const [hashTitle, setHashTitle] = useState('');
  const [active, setActive] = useState('-1');
  const toggleActive = (e) => {
    e.preventDefault();
    setActive(e.target.value);
  };

  const handleSubmit = (hashTitle, hashtag) => {
    // http://{{host}}/tourlist/hashtag?pageno=1&size=12&hashtag=전통체험&hashtag=종교성지
    let hashtagParams = '';
    for (let i = 0; i < hashtag.length; i++) {
      hashtagParams += '&hashtag=' + hashtag[i];
    }
    return navigate(`/search?hashTitle=${hashTitle}${hashtagParams}`);
  };

  return (
    <Container>
      <h2>태그 선택</h2>
      <ul>
        {Array.isArray(hashtagList)
          ? hashtagList.map((item, idx) => {
              return (
                <li
                  value={idx}
                  className={idx == active ? 'active' : ''}
                  onClick={(e) => {
                    toggleActive(e);
                    setHashTitle(item.title);
                    setHashtag(item.hashtag);
                    console.log(hashtag);
                  }}
                  key={idx}
                >
                  {item.title}
                </li>
              );
            })
          : null}
      </ul>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <button
          aria-label="submit"
          onClick={() => {
            //const items = new Array(hashtag);
            handleSubmit(hashTitle, hashtag);
            onClose();
          }}
        >
          검색하기
          <BiSearch size="20" color="#fff" />
        </button>
      </form>
    </Container>
  );
};

const Container = styled.div`
  width: 50vw;
  height: 60vh;
  background: #fff;
  border-radius: 10px;
  padding: 60px 50px;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  h2 {
    font-family: SBAggroB;
    font-size: 1.5em;
    letter-spacing: -1px;
    text-align: center;
    margin-bottom: 30px;
  }
  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 13px;
    li {
      cursor: pointer;
      width: calc(14.5% - 13px);
      height: 45px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      background-color: #eaebed;
      border-radius: 50px;
      font-size: 13px;
      font-weight: bold;
      &:hover {
        background-color: #2358c5;
        color: #fff;
      }
      &.active {
        background-color: #2358c5;
        color: #fff;
      }
    }
  }
  form {
    margin-top: auto;
    button {
      border: none;
      width: 20vw;
      height: 60px;
      font-size: 16px;
      background-color: #2358c5;
      color: #fff;
      border-radius: 10px;
      margin: auto auto 0;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      svg {
        margin-top: 3px;
      }
    }
  }
`;

export default LocationModal;
