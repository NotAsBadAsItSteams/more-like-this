import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Reviews.css';

const ratingType = (rating) => {
  if (rating.toLowerCase().includes('positive')) {
    return 'positive';
  } else if (rating.toLowerCase().includes('negative')) {
    return 'negative';
  } else if (rating.toLowerCase().includes('mixed')) {
    return 'mixed';
  }
  return null;
};

const formatNumber = number => number.toLocaleString();

const Reviews = ({ number, rating }) => (
  <div className={styles.element}>
    <div>Overall user reviews: </div>
    <span className={styles[ratingType(rating)]}>{rating}</span>
    <span> ({formatNumber(number)} reviews)</span>
  </div>
);

Reviews.propTypes = {
  number: PropTypes.number.isRequired,
  rating: PropTypes.string.isRequired,
};

export default Reviews;
