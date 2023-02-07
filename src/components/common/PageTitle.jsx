import React from 'react';
import styled from 'styled-components';

const PageTitle = ({ title }) => {
  return (
    <Container>
      <Inner>{title}</Inner>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 60px 15px 0 15px;
  margin-bottom: 30px;
`;

const Inner = styled.div`
  width: 1136px;
  height: auto;
  margin: auto;
  font-size: 32px;
  font-weight: 600;
  color: #464646;
`;

export default PageTitle;
