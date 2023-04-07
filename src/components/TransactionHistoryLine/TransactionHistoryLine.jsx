import PropTypes from 'prop-types';
import css from './TransactionHistoryLine.module.css';

export const TransactionHistoryLine = ({ type, amount, currency }) => {
  return (
    <tr className={css.line}>
      <td className={css.item}>{type}</td>
      <td className={css.item}>{amount}</td>
      <td className={css.item}>{currency}</td>
    </tr>
  );
};

TransactionHistoryLine.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
