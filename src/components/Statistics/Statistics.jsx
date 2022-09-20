import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import commonStyles from '../../css/Common.module.css';
import { getColor } from 'utils';

// const backgroundColor = {
//   backgroundColor: getColor(),
// };

export const Statistics = ({ title, stats }) => {
  return (
    <section className={commonStyles.section}>
      {title && <h2 className={commonStyles.title}>{title}</h2>}
      <div className={commonStyles.container}>
        <ul className={css.statList}>
          {stats.map(item => (
            <li
              key={item.id}
              style={{ backgroundColor: getColor() }}
              className={css.item}
            >
              <span className={css.label}>{item.label}</span>
              <span className={css.percentage}>{item.percentage + '%'}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
