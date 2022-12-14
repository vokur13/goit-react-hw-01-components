import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';
import commonStyles from '../../css/Common.module.css';

export const TransactionHistory = ({ title, items }) => {
  return (
    <section className={commonStyles.section}>
      {title && <h2 className={commonStyles.title}>{title}</h2>}
      <div className={commonStyles.container}>
        <table className={css.transactionHistory}>
          <thead>
            {/* <tr>
              {items.forEach(item => {
                const data = Object.entries(item);
                const keyArr = [];
                data.forEach(([key, value]) => {
                  if (key !== 'id' && !keyArr.includes(key)) {
                    <th>{key}</th>;
                    //     keyArr.push(key);
                  }
                });
                // for (let index = 0; index < keyArr.length; index++) {
                //   const element = keyArr[index];
                //   return <th>{element}</th>;
                // }
              })}
            </tr> */}
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </thead>

          <tbody>
            {items.map(item => (
              <tr key={item.id}>
                <td className={`${css.itemType} ${css[item.type]}`}>
                  {item.type}
                </td>
                <td className={`${css.itemType} ${css[item.type]}`}>
                  {item.amount}
                </td>
                <td className={`${css.itemType} ${css[item.type]}`}>
                  {item.currency}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

// TransactionHistory.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.string.isRequired,
//       type: PropTypes.string.isRequired,
//       amount: PropTypes.string.isRequired,
//       currency: PropTypes.string.isRequired,
//     })
//   ),
// };
