import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { wishItemState } from '@/Atoms/wishAtom';
import styled from 'styled-components';

const Wishfilter = ({ setLocation, filter, setFilter }) => {
  console.log('Wishfilter');
  const wishItems = useRecoilValue(wishItemState);
  console.log(filter);
  const [active, setActive] = useState(999);
  const toggleActive = (i) => {
    setActive(i);
  };

  const handleClick = (e) => {
    if (e.target.outerText === '전체') {
      setFilter('');
    } else {
      setFilter(e.target.outerText);
    }
  };

  return (
    <Filter>
      <button
        className={active === 999 ? 'active' : ''}
        onClick={(e) => {
          toggleActive(999);
          handleClick(e);
        }}
      >
        전체
      </button>
      {setLocation.map((location, i) => {
        return (
          <button
            className={i == active ? 'active' : ''}
            onClick={(e) => {
              handleClick(e);
              toggleActive(i);
            }}
          >
            {location}
          </button>
        );
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

    &.active {
      color: #fff;
      background-color: rgb(33, 33, 33);
      border-radius: 30px;
    }
  }
`;

export default Wishfilter;
