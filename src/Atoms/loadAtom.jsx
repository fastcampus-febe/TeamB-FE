import { atom, selector } from 'recoil';

export const kakaoLoad = atom({
  key: 'kakaoLoad', // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export const TodoListState = selector({
  key: 'ListState',
  get: ({ get }) => {
    const filter = get(kakaoLoad);
    return filter;
  },
});
