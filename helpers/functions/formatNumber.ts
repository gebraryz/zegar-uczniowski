import numeral from 'numeral';

export const formatNumber = (value: string | number): string =>
  numeral(value).format('0,0');
