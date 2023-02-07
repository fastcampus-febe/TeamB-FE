import React from 'react';
import style from './WishCard.module.scss';
import { AiTwotoneStar } from 'react-icons/Ai';
import WishIcon from '../../common/wishIcon/WishIcon';
import { MdLocationPin } from 'react-icons/Md';
import { MdCall } from 'react-icons/Md';

const WishCard = ({ list }) => {
  return (
    <div className={style.wrap}>
      <WishIcon className={style.wishIcon} list={list} />
      <div className={style.image}>
        <img src={list.firstimage} alt={list.title + ' 사진'} />
      </div>
      <div className={style.info}>
        <div className={style.titleWrap}>
          <div>
            <p className={style.title}>{list.title}</p>
            <p className={style.cat3}>
              #{list.cat3} #{list.inOut}
            </p>
          </div>

          <p className={style.rate}>
            <AiTwotoneStar className="rate-icon" />
            {list.rate}
          </p>
        </div>
        <div className={style.detailWrap}>
          <div className={style.group}>
            <MdLocationPin className={style.addrIcon} />
            <p className={style.addr1}>{list.addr1}</p>
          </div>
          <div className={style.group}>
            <MdCall className={style.infocenterIcon} />
            <p className={style.infocenter}>{list.infocenter}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishCard;
