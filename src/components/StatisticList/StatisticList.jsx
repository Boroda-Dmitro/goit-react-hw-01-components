import PropTypes from 'prop-types';
import {Statistic} from '../Statistics/Statistics';

export const StatisticList = ({ stats, title = "Upload stats" }) => {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>
      {stats.map(statistic => {
        return (
          <Statistic
            key={statistic.id}
            label={statistic.label}
            percentage={statistic.percentage}
          />
        );
      })}
      <ul className="stat-list"></ul>
    </section>
  );
};

StatisticList.propTypes = {
    stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
