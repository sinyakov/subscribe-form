import React from 'react';
import PropTypes from 'prop-types';

import termToString from '../../utils/termToString';

const Period = ({ term, price }) => {
  const total = term * price;

  return (
    <div className="period">
      <div className="period__term">{termToString(term)}</div>
      <div className="period__total">{total} руб.</div>
      <div className="period__price">
        <span className="period__price-number">{price}</span> руб. / месяц
      </div>
    </div>
  );
};

Period.propTypes = {
  term: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};

export default Period;
