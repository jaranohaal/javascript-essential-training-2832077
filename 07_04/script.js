/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array 
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */

var isBig = false;
var numberOfPeople = 2;

const table = ["juice", isBig, "knife", 1, numberOfPeople, 15.7, "mouse", "laptop"]

console.log(table);

var last = table.pop() //Remove last item

console.log("After removing last item ", table);

table.unshift(last) // Add last item as the first

console.log("After adding last item as first", table);

table.sort() //Sort items

console.log("After sorting alphabetically ", table);

console.log(table.find(item=>item =="knife"));


console.log(table.find(item=>item =="headset"));

var f = table.indexOf(table.find(item=>item =="knife"))
delete table[f];

console.log("After deleting knife ",table)