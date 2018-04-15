import React, { Component } from 'react';

import Card from './Card';
import Period from './Period';
import Checkbox from './Checkbox';
import Radio from './Radio';

import paymentMethods from '../../data/paymentMethods';
import periodOptions from '../../data/periodOptions';
import Button from './Button';

import termToString from '../../utils/termToString';

class Subscribing extends Component {
  state = {
    paymentMethod: null,
    gift: false,
    period: null,
    renewal: false,
    discount: false,
  };

  setPaymentMethod = (event) => {
    const paymentMethod = event.target.name;
    const selectedPaymentMethod = paymentMethods.find(({ text }) => text === paymentMethod);
    const renewalable = selectedPaymentMethod && selectedPaymentMethod.renewal;

    this.setState(({ renewal }) => ({
      paymentMethod,
      renewal: renewal && renewalable,
    }));
  };

  setPeriod = (event) => {
    this.setState({ period: parseInt(event.target.name, 10) });
  };

  setGift = () => {
    this.setState(({ gift, paymentMethod }) => ({
      gift: !gift,
      paymentMethod: paymentMethod === 'Подарочный код' && !gift ? null : paymentMethod,
    }));
  };

  setRenewal = () => {
    this.setState(({ renewal }) => ({ renewal: !renewal }));
  };

  setDiscount = () => {
    this.setState(({ discount }) => ({ discount: !discount }));
  };

  submitForm = () => console.log(this.state);

  render() {
    const {
      paymentMethod, gift, period, renewal, discount,
    } = this.state;

    const showTotal = paymentMethod && period;

    const selectedPaymentMethod = paymentMethods.find(({ text }) => text === paymentMethod);
    const selectedPeriodOption = periodOptions.find(({ term }) => term === period);

    const renewalable = selectedPaymentMethod && selectedPaymentMethod.renewal;

    const totalSum = selectedPeriodOption
      ? selectedPeriodOption.term * selectedPeriodOption.price
      : null;

    return (
      <main className="wrapper">
        <header className="page-header">
          <h1 className="page-header__title">Оформление подписки</h1>
          <h3 className="page-header__subtitle">Спасибо, что решили стать участником клуба</h3>
        </header>
        <div className="form-header">
          <h2 className="form-header__title">Клуб выгодных покупок</h2>
        </div>
        <div className="form-block">
          <h2 className="form-block__header">Выберите способ оплаты</h2>
          <div className="payment-list">
            {paymentMethods.map(method => (
              <Radio
                checked={method.text === paymentMethod}
                disabled={method.text === 'Подарочный код' && gift}
                onChange={this.setPaymentMethod}
                key={method.text}
                id={method.text}
              >
                <Card {...method} />
              </Radio>
            ))}
          </div>
          {paymentMethod !== 'Подарочный код' && (
            <Checkbox text="Покупаю подписку в подарок" onChange={this.setGift} checked={gift} />
          )}
        </div>
        {paymentMethod !== 'Подарочный код' ? (
          <div>
            {paymentMethod && (
              <div className="form-block">
                <h2 className="form-block__header">На какой срок</h2>
                <div className="payment-list">
                  {periodOptions.map(option => (
                    <Radio
                      checked={option.term === period}
                      onChange={this.setPeriod}
                      key={option.term}
                      id={option.term.toString()}
                    >
                      <Period {...option} />
                    </Radio>
                  ))}
                </div>
                {renewalable &&
                  !gift && (
                    <Checkbox
                      text="Продлевать подписку автоматически"
                      description="Оплачивая подписку, я принимаю условия условия оплаты, указанные в оферте и условияавтоматического продленияподписки на месяц вперед"
                      onChange={this.setRenewal}
                      checked={renewal}
                    />
                  )}
              </div>
            )}
            {showTotal && (
              <div className="form-block">
                <h2 className="form-block__header">Итого к оплате (за {termToString(period)})</h2>
                {discount ? (
                  <div className="total">
                    <span className="total__secondary">
                      {`${totalSum.toLocaleString('ru-RU')} + 150`} ={' '}
                    </span>
                    {(totalSum + 150).toLocaleString('ru-RU')} руб.
                  </div>
                ) : (
                  <div className="total">{totalSum.toLocaleString('ru-RU')} руб.</div>
                )}
                {renewal && <div>Далее 120 руб. в месяц</div>}
                <Checkbox
                  text="Добавить подписку на скидку 5% а весь ассортимент товаров"
                  description="Срок действия подписки 6 месяцев. Стоимость подписки 150 руб."
                  onChange={this.setDiscount}
                  checked={discount}
                />
              </div>
            )}
          </div>
        ) : (
          <div className="form-block">Вы выбрали подарочный код</div>
        )}
        <div className="form-footer">
          {paymentMethod && (
            <Button disabled={!period} onClick={this.submitForm}>
              Оплатить
            </Button>
          )}

          <div className="messages">
            <div className="message message--comission">
              Нет комиссии при оплате банковскими картами, Яндекс.Деньгами и Qiwi
            </div>
            <div className="message message--protection">
              Все платежи надежно защишены и соотвествуют международным стандартам
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Subscribing;
