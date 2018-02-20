/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var count = 0;
  for(var i = 0; i<preferences.length; i++) {
  	var firstIndex = preferences[i];
  	var secondIndex = preferences[firstIndex-1];
  	var thirdIndex = preferences[secondIndex-1];
  	if (thirdIndex -1 === i) {
  		count ++;
  	}
  }
  return Math.floor(count/3);
};
