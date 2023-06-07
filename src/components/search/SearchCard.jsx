import React from 'react';
import { AiTwotoneStar } from 'react-icons/ai';
import { MdImageNotSupported } from 'react-icons/md';
import WishIcon from '@components/common/wishIcon/WishIcon';
import styles from './SearchCard.module.scss';
import { Link } from 'react-router-dom';

const SearchCard = ({ list }) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Link to={'/detail/' + list.contentid}>
          {list.firstimage ? (
            <img src={list.firstimage} alt={list.title + ' 사진'} />
          ) : (
            <div className={styles.noImage}>
              <MdImageNotSupported size="84" color="#fff" />
              <p>No Image</p>
            </div>
          )}
        </Link>
        <WishIcon className={styles.wishIcon} list={list} isSearch={true} />
      </div>

      <div className={styles.info}>
        <div className={styles.titleWrap}>
          <Link to={'/detail/' + list.contentid}>
            <p className={styles.title}>{list.title}</p>
          </Link>
          <p className={styles.rate}>
            <AiTwotoneStar className={styles.rateIcon} />
            {list.rate}
          </p>
        </div>
        <p className={styles.addr1}>{list.addr1}</p>
        <p className={styles.infocenter}>{list.infocenter}</p>
        <p className={styles.cat3}>
          #{list.cat3} #{list.inOut}
        </p>
      </div>
    </div>
  );
};

export default SearchCard;
