import PropTypes from 'prop-types';
import css from './Profile.module.css';

export const Profile = ({ name, avatar, tag, location, stats }) => {
  return (
    <section>
      <div className={css.profile}>
        <div className={css.description}>
          <img src={avatar} alt={name} className={css.avatar} />
          <p className={css.name}>{name}</p>
          <p className={css.text}>@{tag}</p>
          <p className={css.text}>{location}</p>
        </div>

        <ul className={css.stats}>
          <li className={css.stats__item}>
            <span className={css.label}>Followers</span>
            <span className={css.quantity}>{stats.followers}</span>
          </li>
          <li className={css.stats__item}>
            <span className={css.label}>Views</span>
            <span className={css.quantity}>{stats.views}</span>
          </li>
          <li className={css.stats__item}>
            <span className={css.label}>Likes</span>
            <span className={css.quantity}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
