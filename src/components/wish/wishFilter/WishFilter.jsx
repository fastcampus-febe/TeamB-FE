import React, { useState } from 'react';
import style from './WishFilter.module.scss';
import { useRecoilValue } from 'recoil';
import { wishItemState } from '@/Atoms/wishAtom';
import styled from 'styled-components';

const Wishfilter = ({ setLocation, filter, setFilter }) => {
  const wishItems = useRecoilValue(wishItemState);
  console.log(filter);

  const handleClick = (event) => {
    if (event.target.outerText === '전체') {
      setFilter('');
    } else {
      setFilter(event.target.outerText);
    }
  };

  return (
    <Filter className={style.wrap}>
      <button className={style.total} onClick={handleClick} autofocus="autofocus">
        전체
      </button>
      {setLocation.map((location) => {
        return <button onClick={handleClick}>{location}</button>;
      })}
    </Filter>
  );
};

const Filter = styled.div`
  width: 100%;
  height: auto;
  padding: 15px 0;
  display: flex;
  button {
    background-color: transparent;
    border: none;
    padding: 20px 20px;
    font-size: 16px;
    box-sizing: border-box;
    cursor: pointer;
    color: #000;

    &:hover {
      background-color: #eee;
      border-radius: 30px;
    }

    &:focus {
      color: #fff;
      background-color: rgb(33, 33, 33);
      border-radius: 30px;
    }
  }
`;

export default Wishfilter;
