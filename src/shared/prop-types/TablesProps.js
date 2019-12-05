import PropTypes from 'prop-types';

const {
  string, shape, arrayOf, number,
} = PropTypes;

export const CryptoRowProps = shape({
  name: string,
  market_cap: string,
  price: string,
  volume: string,
  supply: string,
  change: string,
  chart: string,
});

export const CryptoTableProps = arrayOf(CryptoRowProps);

export const NewOrderRowProps = shape({
  title: string,
  quantity: number,
  sold: number,
  total: string,
  img: string,
});

export const NewOrderTableProps = arrayOf(NewOrderRowProps);
