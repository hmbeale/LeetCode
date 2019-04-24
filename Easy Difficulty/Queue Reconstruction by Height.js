//https://leetcode.com/problems/queue-reconstruction-by-height/
//slow and ugle but works

/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
  //ok how might I manually sort this

  //[[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]
  //[7,0], [4,4] <--got to move because only one element in front
  //[7,0], [7,1], [5,0], [6,1], [4,4] [5,2]
  //[7,0], [7,1], [5,0] <-- got to move because it can't have anything higher
  //[5,0], [7,0], [7,1], [6,1],  <-- got to move because it can only have one higher
  //[5,0], [7,0], [6,1], [7,1], [4,4] [5,2]
  //[5,0], [7,0], [6,1], [7,1], [4,4], [5,2] <--got to move because only two higher
  //[5 0] [7 0] [5 2] [6 1] [7 1] [4 4] <--only 4 higher
  //[5 0] [7 0] [5 2] [6 1] [4 4] [7 1] done

  //calculates how displaced elements are
  //0 means the element doesn't need to move
  //2 means the elent needs to move over two elements higher than it to the right
  //-1 means the element needs to move left one element higher(?) than it
  const calcKDifference = (arr, index) => {
    const height = arr[index][0];
    const k = arr[index][1];
    let count = 0;

    //counts elements to the left of index and returns number of heights greater
    //than index element height
    for (let i = 0; i < index; i++) {
      const h = arr[i][0];
      if (h >= height) {
        count++;
      }
    }
    return k - count;
  };

  //sees how far the element needs to move based on k difference
  //starts with element and looks left or right
  const calcMoveDist = (arr, index) => {
    const height = arr[index][0];
    const kDifference = calcKDifference(arr, index);
    let travelDist = 0;
    let numHigherHeights = 0;

    //no movement necessary
    if (kDifference == 0) {
      return travelDist;
    }

    //search right
    if (kDifference > 0) {
      for (let i = index + 1; i < arr.length; i++) {
        const h = arr[i][0];
        travelDist++;
        if (h >= height) {
          numHigherHeights++;
        }
        if (numHigherHeights == kDifference) {
          return travelDist;
        }
      }
    }

    //search left
    if (kDifference < 0) {
      for (let i = index - 1; i >= 0; i--) {
        const h = arr[i][0];
        travelDist--;
        if (h >= height) {
          numHigherHeights++;
        }
        if (numHigherHeights * -1 == kDifference) {
          return travelDist;
        }
      }
    }

    return travelDist;
  };

  const moveElement = (arr, index, distance) => {
    let response = arr;

    //note distance can be negative
    const newIndex = index + distance;

    [response[index], response[newIndex]] = [
      response[newIndex],
      response[index]
    ];

    return response;
  };

  //moves elements based on their calculated distance
  //changes input array doesn't make new one
  const moveArrElements = arr => {
    //let response = arr;

    for (let i = 0; i < arr.length; i++) {
      moveElement(arr, i, calcMoveDist(arr, i));
    }

    return arr;
  };

  const evaluateKDist = arr => {
      const response = arr;
      let test = [];
      for (let i = 0; i< response.length; i++){
          test.push(calcKDifference(response, i))
      }
      return test;
  }

  const sumKDist = arr => {
      //should use reduce but am not clever enough
      const allKDists = evaluateKDist(arr);
      let evaluator = 0;
      //don't forget absolute values

      for (let i = 0; i<allKDists.length; i++){
          evaluator += Math.abs(allKDists[i]);
      }
      return evaluator;
  }
  /*
  const multiMoveArrElements = arr => {
      //evaluates if movement is needed then moves
      //repeat to completion
      let evaluator = sumKDist(arr);
      let hardCap = 0;
      while(evaluator>0 && hardCap < 50){
          moveArrElements(people);
          hardCap++;
          evaluator = sumKDist(arr);
      }
  }
*/
  const multiMoveArrElements = arr => {
    for (let i = 0; i<20; i++){
        moveArrElements(people);
    }
  }

  multiMoveArrElements(people);

  return people;
};
