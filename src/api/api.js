import { instance } from './axios';

// export const getDetails = async (id, setState, setError) => {
//   try {
//     const res = await instance.get(`/commentThreads?part=snippet&videoId=${id}`);

//     if (res.status === 200) {
//       setState(res);
//     }
//   } catch (error) {
//     if (error instanceof AxiosError) {
//       console.log(error.message);
//       setError(error.message);
//     }
//   }
// };

export const getDetails = async (detailId) => {
  const sending = {
    contentid: detailId,
  };
  return instance.get(`tourList/detail`, { params: { ...sending } });
};
