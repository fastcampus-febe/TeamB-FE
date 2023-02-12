import { instance } from './axios';
import { AxiosError } from 'axios';
import { detailDummydata } from '@/data/dummydata';

// export const getDetails = async (tourId, setState, setError) => {
//   try {
//     const res = await instance.get(`tourlist/detail?contentid=${tourId}`);
//     if (res.status === 200) {
//       setState(res);
//       console.log(res);
//     }
//   } catch (error) {
//     if (error instanceof AxiosError) {
//       console.log(error.message);
//       setError(error.message);
//       setState(detailDummydata);
//     }
//   }
// };

// 키워드
export const getKeyword = async (page, keyword) => {
  const sending = {
    pageno: page,
    keyword: keyword,
  };
  return instance.get(`tourlist/keyword`, { params: { ...sending } });
};

// 지역
export const getLocation = async (page, location) => {
  const sending = {
    pageno: page,
    areacode: location,
  };
  return instance.get(`tourlist/location`, { params: { ...sending } });
};

export const getDetails = async (detailId) => {
  const sending = {
    contentid: detailId,
  };
  return instance.get(`tourlist/detail`, { params: { ...sending } });
};

export const getWeather = async (mapx, mapy) => {
  const sending = {
    mapX: mapx,
    mapY: mapy,
  };
  return instance.get(`tourlist/weather`, { params: { ...sending } });
};
