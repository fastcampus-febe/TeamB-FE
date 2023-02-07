import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'SBAggroB';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SBAggroB.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  body {
    font-family: 'Roboto', sans-serif;
    background-color: #fff;
    color: #0f0f0f
  }
  ul, li {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: #0F0F0F;
  }
  ::selection {
    color: white;
    background-color: #2358c5;
  }
  .swiper-rtl > .swiper-wrapper {
    transition-timing-function : linear;
  }
  .react-confirm-alert-overlay {
    background: rgba(0, 0, 0, 0.4);
  }
`;

export default GlobalStyles;
