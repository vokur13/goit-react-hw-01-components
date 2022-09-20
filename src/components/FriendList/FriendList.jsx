import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import commonStyles from '../../css/Common.module.css';

export const FriendList = ({ title, friends }) => {
  return (
    <section className={commonStyles.section}>
      {title && <h2 className={commonStyles.title}>{title}</h2>}
      <div className={commonStyles.container}>
        <ul className={css.friendList}>
          {friends.map(friend => (
            <li key={friend.id} className={css.item}>
              <span
                className={
                  friend.isOnline
                    ? `${css.status} ${css.online}`
                    : `${css.status} ${css.offline}`
                }
              ></span>
              <img
                className={css.avatar}
                src={friend.avatar}
                alt="User avatar"
                width="48"
              />
              <p className={css.name}>{friend.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

FriendList.propTypes = {
  title: PropTypes.string,
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
