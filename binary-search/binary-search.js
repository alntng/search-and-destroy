"use strict";

// Complete this algo

const binarySearch = (array, target) => {
  console.log(array, target);
  if (array.length === 1) {
    if (array[0] === target) {
      return true;
    } else {
      return false;
    }
  } else {
    let middleIdx = Math.floor(array.length / 2);
    let firstHalf = array.slice(0, middleIdx);
    let seccondHalf = array.slice(middleIdx);
    // console.log("firstHalf:", firstHalf);
    // console.log("secondHalf:", seccondHalf);

    if (array[middleIdx] > target) {
      return binarySearch(firstHalf, target);
    } else {
      return binarySearch(seccondHalf, target);
    }
  }
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
