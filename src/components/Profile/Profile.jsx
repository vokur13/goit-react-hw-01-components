import PropTypes from 'prop-types';
import { FaMapMarkerAlt, FaUserAlt } from 'react-icons/fa';
import { iconSize } from 'constants';
import css from './Profile.module.css';
import commonStyles from '../../css/Common.module.css';

export const Profile = ({
  username,
  tag,
  location,
  avatar = FaUserAlt,
  stats,
}) => {
  return (
    <section className={commonStyles.section}>
      <div className={css.profile}>
        <div className={commonStyles.container}>
          <div className={css.description}>
            <img
              src={avatar ?? FaUserAlt}
              alt="User avatar"
              className={css.avatar}
            />
            <p className={css.name}>{username}</p>
            <p className={css.tag}>{'@' + tag}</p>
            <p className={css.location}>
              <FaMapMarkerAlt className={css.icon} size={iconSize.s} />
              {location}
            </p>
          </div>

          <ul className={css.stats}>
            <li>
              <span className={css.label}>Followers</span>
              <span className={css.quantity}>{stats.followers}</span>
            </li>
            <li>
              <span className={css.label}>Views</span>
              <span className={css.quantity}>{stats.views}</span>
            </li>
            <li>
              <span className={css.label}>Likes</span>
              <span className={css.quantity}>{stats.likes}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
