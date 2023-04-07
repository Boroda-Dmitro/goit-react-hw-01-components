import PropTypes from 'prop-types';
import { Statistic } from '../Statistics/Statistics';
import css from './StatisticList.module.css';

export const StatisticList = ({ stats, title }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      {/* {title ? (
        <h2 className={css.title}>{title}</h2>
      ) : (
        <h2 className={css.title}>Upload stats</h2>
      )} */}
      <ul className={css.stat__list}>
        {stats.map(statistic => {
          return (
            <Statistic
              key={statistic.id}
              label={statistic.label}
              percentage={statistic.percentage}
            />
          );
        })}
      </ul>
    </section>
  );
};

StatisticList.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
