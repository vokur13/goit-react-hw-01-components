export const getTableRowColor = item => {
  item.forEach((element, index) => {
    if (index % 2 !== 0) {
      return '#2196F3';
    }
    return '#2F303A';
  });
};

// item.forEach((element, index) => {
//   if (index % 2 !== 0) {
//     return '#2196F3';
//   }
//   return '#2F303A';
// });
