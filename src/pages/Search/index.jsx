import React from 'react';
import styled from 'styled-components';
import { searchListDummyData } from '../../data/dummydata';
import SearchCard from '../../components/search/SearchCard';
import PageTitle from '../../components/common/PageTitle';

const Search = () => {
  console.log(searchListDummyData);

  return (
    <Container>
      <PageTitle title={'검색 결과'} />

      <Inner>
        {searchListDummyData.map((list) => {
          return <SearchCard list={list} />;
        })}
      </Inner>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const Inner = styled.div`
  width: 1136px;
  height: auto;
  margin: auto;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  @media (max-width: 1300px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
  @media (max-width: 1160px) {
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  }
`;

export default Search;
