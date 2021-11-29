const middle = function(array) {
  if (array.length <= 2) return [];

  let midIndex = Math.floor((array.length - 1) / 2);

  if (array.length % 2 === 0) return array.slice(midIndex, midIndex + 2);
  else return array.slice(midIndex, midIndex + 1);
};

module.exports = middle
