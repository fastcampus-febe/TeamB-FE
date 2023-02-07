import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { kakaoLoad } from '@atom/loadAtom';

const useLoad = () => {
  const [text, setText] = useRecoilState(kakaoLoad);

  useEffect(() => {
    if (!import.meta.env.VITE_KAKAO) return;
    if (text) return;

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${
      import.meta.env.VITE_KAKAO
    }&autoload=false`;
    document.head.appendChild(script);

    script.onload = () => {
      setText(true);
    };
  }, [text]);
  return text === true;
};

export default useLoad;
