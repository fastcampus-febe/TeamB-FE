import React, { useEffect, useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import styles from './WishIcon.module.scss';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { wishItemState } from '../../../Atoms/wishAtom.jsx';

const WishIcon = ({ list, isSearch }) => {
  const [wish, setWish] = useState(false);
  const setWishItem = useSetRecoilState(wishItemState);
  const wishItemList = useRecoilValue(wishItemState);

  const wishCheck = () => {
    wishItemList.filter((obj) => {
      if (obj.contentid === list.contentid) {
        setWish(true);
      }
    });
  };

  useEffect(() => {
    console.log('wishIcon', 'useEffect');
    wishCheck();
  }, [wishItemList]);

  const insertItem = () => {
    setWishItem((oldWishItem) => [
      ...oldWishItem,
      {
        addr1: list.addr1,
        contentid: list.contentid,
        title: list.title,
        cat3: list.cat3,
        infocenter: list.infocenter,
        firstimage: list.firstimage,
        inOut: list.inOut,
        rate: list.rate,
      },
    ]);
  };

  const removeItem = () => {
    console.log('wishIcon', 'removeItem');
    const num = wishItemList.filter((obj) => {
      return obj.contentid !== list.contentid;
    });
    setWishItem(num);
  };

  function handleInsertWish() {
    console.log('wishIcon', 'handleInsertWish');
    insertItem();
    setWish((wish) => !wish);
  }

  function handleRemoveWish() {
    console.log('wishIcon', 'handleRemoveWish');
    removeItem();
    setWish((wish) => !wish);
  }

  return (
    <div>
      {wish ? (
        <AiFillHeart
          className={`${isSearch ? styles.searchPage : styles.wishPage}`}
          onClick={handleRemoveWish}
        />
      ) : (
        <AiOutlineHeart
          className={`${isSearch ? styles.searchPage : styles.wishPage}`}
          onClick={handleInsertWish}
        />
      )}
    </div>
  );
};

export default WishIcon;
