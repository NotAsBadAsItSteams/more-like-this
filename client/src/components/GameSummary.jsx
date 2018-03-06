import React from 'react';
import PropTypes from 'prop-types';
import formatPrice from '../lib/humanReadable';
import styles from '../styles/GameSummary.css';

const GameSummary = ({ game: { thumbnailUrl, title, price } }) => (
  <div className={styles.element}>
    <img className={styles.img} src={thumbnailUrl} alt={title} />
    <div className={styles.title}>{title}</div>
    <div className={styles.price}>{formatPrice(price)}</div>
  </div>
);

GameSummary.propTypes = {
  game: PropTypes.shape({
    thumbnailUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
};

export default GameSummary;
