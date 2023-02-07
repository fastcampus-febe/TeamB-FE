import React, { useState } from 'react';
import styled from 'styled-components';
import PageTitle from '@/components/common/PageTitle';
import { useRecoilValue } from 'recoil';
import { wishItemState } from '../../Atoms/wishAtom';
import WishCard from '../../components/wish/wishCard/WishCard';
import WishFilter from '../../components/wish/wishFilter/WishFilter';

const Wish = () => {
  const wishItems = useRecoilValue(wishItemState);
  const [filter, setFilter] = useState('');

  const wishLocation = [];
  for (let i = 0; i < wishItems.length; i++) {
    const location = wishItems[i].addr1.split(' ')[0];
    wishLocation.push(location);
  }

  const setLocation = [...new Set(wishLocation)];
  console.log(filter);

  return (
    <Container>
      <PageTitle title={'위시리스트'} />
      <Inner>
        <WishFilter setLocation={setLocation} filter={filter} setFilter={setFilter} />
        <WishList>
          {filter === ''
            ? wishItems.map((list) => {
                return <WishCard list={list} />;
              })
            : wishItems
                .filter((x) => x.addr1.split(' ')[0] === filter)
                .map((list) => {
                  return <WishCard list={list} />;
                })}
        </WishList>
      </Inner>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 2000px;
`;

const Inner = styled.div`
  width: 1136px;
  height: auto;
  margin: auto;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
`;

const WishList = styled.div`
  margin-top: 20px;
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(2, minmax(300px, 1fr));
  @media (max-width: 1300px) {
    grid-template-columns: repeat(3, minmax(100px, 1fr));
  }
`;

export default Wish;
