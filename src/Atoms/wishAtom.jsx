import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const wishItemState = atom({
  key: 'wishItemState',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const insertWishItemState = selector({
  key: 'insertWishItemState',
  get: ({ get }) => {
    const test = get(wishItemState);
    return test;
  },
});
