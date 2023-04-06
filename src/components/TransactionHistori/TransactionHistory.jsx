import PropTypes from 'prop-types';
import { TransactionHistoryLine } from '../TransactionHistoryLine/TransactionHistoryLine';
import css from './TransactionHistori.module.css'

export const TransactionHistory = ({ items }) => {
  let pair = 0
  return (
    <table className={css.transaction}>
      <thead>
        <tr className={css.transaction__header}>
          <th className={css.transaction__name}>Type</th>
          <th className={css.transaction__name}>Amount</th>
          <th className={css.transaction__name}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => {
          pair +=1;
          return (
            <TransactionHistoryLine
              key={item.id}
              type={item.type}
              amount={item.amount}
              currency={item.currency}
              pair={pair}
            />
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
