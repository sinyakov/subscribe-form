# Gradient Demo

## Как запустить

```bash
git clone git@github.com:sinyakov/subscribe-form.git
cd subscribe-form
npm install
npm start
```

Демо: http://demo.sinyakov.com/leomax

## Задание

1.  Когда пользователь заходит на страницу, он видит блок с вариантами оплаты и опцию «Подарочный код». Можно выбрать один из них.
2.  Если активна (стоит галочка) опция «Покупаю подписку в подарок», вариант «Подарочный код» становится недоступным. В свою очередь, если выбран вариант «Подарочный код», опция «Покупаю подписку в подарок» недоступна и не видна (так же снимается галочка).
3.  Когда выбран вариант оплаты или «Подарочный код», он подсвечивается, а остальные — затеняются. Если выбрано платёжное средство, открывается блок с выбором срока оплаты.
4.  В блоке выбора срока оплаты указано 3 срока оплаты: стоимость — коричневым цветом , большим кеглем — условная месячная цена.
5.  Когда выбран срок оплаты, открывается блок с итоговой информацией об оплате. Итоговая сумма зависит от срока оплаты и опции «Добавить подписку на скидку 5%». Так же становится доступна кнопка «Оплатить» (изначально она disabled).
6.  Опция «Продлевать подписку автоматически» поддерживается только для оплаты картой, Яндексденьгами, PayPal и по СМС (видна, если выбрано одно из них и только если не выбрана опция «Покупаю подписку в подарок»). Если эта опция активирована, под итоговой оплатой появляется текст «Далее 120 руб. в месяц».
7.  Если активная опция «Добавить подписку на скидку 5%», увеличивается итоговая стоимость (в виде уравнения: стоимость подписки + стоимость подписки на скидку 5% = итог)
