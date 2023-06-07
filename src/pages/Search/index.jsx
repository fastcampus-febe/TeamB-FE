import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FcInfo } from 'react-icons/fc';
import { getKeyword, getLocation, getHashtag } from '@api/api';
import SearchCard from '@components/search/SearchCard';
import PageTitle from '@components/common/PageTitle';
import Pagination from '@components/common/pagination/Pagination';
import { useLocation } from 'react-router-dom';

const Search = () => {
  const [page, setPage] = useState(1);
  const limit = 12;
  const offset = (page - 1) * limit;
  const [searchList, setSearchList] = useState([]);
  const [total, setTotal] = useState(0);
  const [searchText, setSearchText] = useState('');

  let params = new URLSearchParams(useLocation().search);
  const hashParams = params.getAll('hashtag');

  // 쿼리 구분
  const searchKeyword = params.get('keyword');
  const searchLocation = params.get('areacode');
  const searchLocationText = params.get('location');
  const searchHashtag = params.get('hashtag');
  const searchHashtagTitle = params.get('hashTitle');

  useEffect(() => {
    if (searchKeyword) {
      getSearchKeyword(page, searchKeyword);
      setSearchText(searchKeyword);
    } else if (searchLocation) {
      getSearchLocation(page, searchLocation);
      setSearchText(searchLocationText);
    } else if (searchHashtag) {
      getSearchHashtag(page, hashParams);
      setSearchText(searchHashtagTitle);
    }
  }, [searchKeyword, searchLocation, searchHashtag]);

  const getSearchKeyword = async () => {
    try {
      const response = await getKeyword(page, searchKeyword);
      setTotal(response.data.data.totalElements);
      setSearchList(response.data.data.content);
    } catch (error) {
      console.log(error);
    }
  };

  const getSearchLocation = async () => {
    try {
      const response = await getLocation(page, searchLocation);
      setTotal(response.data.data.totalElements);
      setSearchList(response.data.data.content);
    } catch (error) {
      console.log(error);
    }
  };

  const getSearchHashtag = async () => {
    try {
      const response = await getHashtag(page, hashParams);
      setTotal(response.data.data.totalElements);
      setSearchList(response.data.data.content);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <PageTitle title={'검색 결과'} />
      {searchList.length > 0 ? (
        <>
          <h1>
            <span>{searchText}</span>에 대한 검색 결과입니다.
          </h1>
          <Inner>
            {searchList.slice(offset, offset + limit).map((list, idx) => {
              return <SearchCard list={list} key={idx} />;
            })}
          </Inner>
        </>
      ) : (
        <NoList>
          <FcInfo size="40" />
          <h1>
            <span>{searchText}</span>에 대한 검색 결과가 없습니다.
          </h1>
        </NoList>
      )}
      {searchList.length > 0 ? (
        <Pagination total={total} limit={limit} page={page} setPage={setPage} />
      ) : null}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  h1 {
    text-align: center;
    margin: 40px 0 20px;
    font-size: 22px;
    font-weight: bold;
    color: #464646;
    span {
      color: #2358c5;
    }
  }
`;

const Inner = styled.div`
  width: 1136px;
  height: auto;
  margin: auto;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  @media (max-width: 1300px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
  @media (max-width: 1160px) {
    grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  }
  gap: 30px;
`;

const NoList = styled.div`
  background-color: #f9f9f9;
  width: 1136px;
  height: 500px;
  margin: 40px auto 80px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  h1 {
    margin: 20px 0 0;
  }
`;

export default Search;
