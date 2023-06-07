import React from 'react';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import styled from 'styled-components';

export default function Pagination({ total, limit, page, setPage }) {
  const numPages = Math.ceil(total / limit);

  return (
    <Nav>
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        <MdArrowBackIosNew />
      </button>
      {Array(numPages)
        .fill()
        .map((_, idx) => {
          return (
            <button
              key={idx + 1}
              onClick={() => setPage(idx + 1)}
              aria-current={page === idx + 1 ? 'page' : null}
              className={page === idx + 1 ? 'active' : null}
            >
              {idx + 1}
            </button>
          );
        })}
      <button onClick={() => setPage(page + 1)} disabled={page === numPages}>
        <MdArrowForwardIos />
      </button>
    </Nav>
  );
}

const Nav = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  margin: 30px 0 70px;
  button {
    display: flex;
    width: 26px;
    height: 26px;
    font-size: 14px;
    line-height: 26px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: transparent;
    outline: none;
    border: none;
    box-sizing: border-box;
    &:first-child {
      margin-right: 20px;
    }
    &:last-child {
      margin-left: 20px;
    }
  }
  .active {
    border-radius: 50px;
    background-color: #2358c5;
    color: #fff;
    padding: 0;
  }
`;
