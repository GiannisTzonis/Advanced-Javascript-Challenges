/*

Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.


*/

function findShort(s) {
    const stringArray = s.split(" ");  // <-- no .trim()
    const orderedArray = stringArray.sort((a, b) => {
      return a.length - b.length;  // - instead of >
    })
    return orderedArray[0].length;
}