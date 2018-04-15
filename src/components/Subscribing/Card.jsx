import React from 'react';
import PropTypes from 'prop-types';

import cardsImg from '../../images/payment/cards.png';
import yandexmoneyImg from '../../images/payment/yandexmoney.png';
import paypalImg from '../../images/payment/paypal.png';
import webmoneyImg from '../../images/payment/webmoney.png';
import qiwiImg from '../../images/payment/qiwi.png';

const imageDict = {
  cards: cardsImg,
  yandexmoney: yandexmoneyImg,
  paypal: paypalImg,
  webmoney: webmoneyImg,
  qiwi: qiwiImg,
};

const Card = ({ img, text, note }) => (
  <div className="card">
    {img ? (
      <img className="card__img" src={imageDict[img]} alt={text} />
    ) : (
      <div className="card__text">
        <div className="card__title">{text}</div>
        <div className="card__descroption">{note}</div>
      </div>
    )}
  </div>
);

Card.propTypes = {
  img: PropTypes.string,
  text: PropTypes.string.isRequired,
  note: PropTypes.string,
};

Card.defaultProps = {
  img: null,
  note: null,
};

export default Card;
