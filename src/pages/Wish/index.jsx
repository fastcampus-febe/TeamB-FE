import React, { useState } from 'react';
import styled from 'styled-components';
import PageTitle from '@/components/common/PageTitle';
import { useRecoilValue } from 'recoil';
import { wishItemState } from '../../Atoms/wishAtom';
import WishCard from '../../components/wish/wishCard/WishCard';
import WishFilter from '../../components/wish/wishFilter/WishFilter';
import { TbMoodEmpty } from 'react-icons/tb';

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
        {wishItems.length > 0 ? (
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
        ) : (
          <Empty>
            <div>
              <TbMoodEmpty className="icon" />
              <p>위시리스트가 비었습니다.</p>
            </div>
          </Empty>
        )}
      </Inner>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 100px;
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

const Empty = styled.div`
  width: 100%;
  height: 500px;
  background-color: #f4f4f4;
  border-radius: 40px;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  div {
    .icon {
      width: 100%;
      font-size: 40px;
      padding-bottom: 20px;
      color: #2358c5;
    }
    p {
      width: 100%;
      font-size: 20px;
      text-align: center;
      font-weight: 700;
      color: #676767;
    }
  }
`;

export default Wish;
