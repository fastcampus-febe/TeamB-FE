import React from 'react';
import { AiTwotoneStar } from 'react-icons/Ai';
import WishIcon from '../../components/common/WishIcon/WishIcon';
import style from './SearchCard.module.scss';

const SearchCard = ({ list }) => {
  return (
    <div className={style.card}>
      <div className={style.image}>
        <img src={list.firstimage} alt={list.title + ' 사진'} />
        <WishIcon className={style.wishIcon} list={list} isSearch={true} />
      </div>
      <div className={style.info}>
        <div className={style.titleWrap}>
          <p className={style.title}>{list.title}</p>
          <p className={style.rate}>
            <AiTwotoneStar className={style.rateIcon} />
            {list.rate}
          </p>
        </div>
        <p className={style.addr1}>{list.addr1}</p>
        <p className={style.infocenter}>{list.infocenter}</p>
        <p className={style.cat3}>
          #{list.cat3} #{list.inOut}
        </p>
      </div>
    </div>
  );
};

export default SearchCard;
