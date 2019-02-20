/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;

  for (let i = 0; i < preferences.length; i++) {
    let spichonee1 = preferences[i];
    if (spichonee1 === i + 1) continue;
    let spichonee2  = preferences[spichonee1 - 1];
    if (spichonee2 === spichonee1) continue;
    let spichonee3  = preferences[spichonee2 - 1];
    if (spichonee3 === spichonee2) continue;
    if (spichonee3 === i + 1) count++;
  };

  return count / 3;
};
