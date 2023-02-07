import React from 'react';
import styled from 'styled-components';

const FirstSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  padding: 0px;
  gap: 16px;
`;

const FirstSectionLeft = styled.div`
  width: min-content;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 16px;
  background-color: blue;
  height: 100px;

  flex-grow: 1;
  img {
    width: 100%;
    object-fit: cover;
  }
`;

const index = () => {
  return (
    <FirstSection>
      <FirstSectionLeft />
      <FirstSectionLeft />
      <FirstSectionLeft />
      <FirstSectionLeft />
      <FirstSectionLeft />
      <FirstSectionLeft />
      <FirstSectionLeft />
      <FirstSectionLeft />
      <FirstSectionLeft />
      <FirstSectionLeft />
      <FirstSectionLeft />
      <FirstSectionLeft />
    </FirstSection>
  );
};

export default index;
