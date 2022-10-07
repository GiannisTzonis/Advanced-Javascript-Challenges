/*

Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string

*/

function fakeBin(x){
    let output = "";
      for (let i=0; i<x.length; i+=1) {
        if (x[i] < 5) {
          output += 0;
        } else { 
          output += 1; }
        }
        return output;
}