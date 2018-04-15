const locale = new Intl.PluralRules('ru-Ru');

const declineYear = (count) => {
  if (locale.select(count) === 'one') {
    return 'год';
  }
  if (locale.select(count) === 'few') {
    return 'года';
  }
  return 'лет';
};

const declineMonth = (count) => {
  if (locale.select(count) === 'one') {
    return 'месяц';
  }
  if (locale.select(count) === 'few') {
    return 'месяца';
  }
  return 'месяцев';
};

export default (term) => {
  const years = Math.floor(term / 12);
  const month = term % 12;

  const yearsStr = years ? `${years} ${declineYear(years)}` : '';
  const monthStr = month ? `${month}  ${declineMonth(month)}` : '';
  return `${yearsStr}${monthStr}`;
};
