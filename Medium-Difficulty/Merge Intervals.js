//https://leetcode.com/problems/merge-intervals/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  //if r sd of interval is less than l sd next
  //merge
    
  //sort based on left element in arr element I guess  
  intervals.sort((a,b) => a[0] - b[0]);
    
  //i navigates intervals
  //i stops short of the end so we don't get out of bounds problems  
  for (let i = 0; i < intervals.length-1; i++) {
     const lCur = intervals[i][0];
     const rCur = intervals[i][1];
     
     const lNext = intervals[i + 1][0];
     const rNext = intervals[i + 1][1]; 
      
      //check for overlap  
      if (rCur >= lNext && lCur <= rNext) {
        //update current and splice out merged element  
        
        //use smaller left and larger right
        const newL = Math.min(lCur, lNext);
        const newR = Math.max(rCur, rNext);
          
        intervals[i] = [newL,newR];         
        intervals.splice(i + 1, 1);   
        i--;
      }
  }

  return intervals;
};
