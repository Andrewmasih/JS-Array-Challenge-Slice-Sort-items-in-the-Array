/* Challenge set by a leading online Shopping Store, I have a shopinglist from a online customer who orders their shopping weekly, however there are some items on the list that they only want every 3 weeks. */



/* this is a way to organise, extract and manipulate pieces of data, example: data structure below. data stored in objects, like Arrays, Lists, Dictionaries,and other simlier data structures which can be indexed, sorted,iterated over, and manipulated are provided to developrs via APi's to create data visulisation sites, UIs, or to perform some sort of analysis on the data.   */

/* challenge: 1/ extract first 3 items from the list for the 1 week of the month.2/ 2nd week extract 3rd anf 4th item from the list. 3/ 3rd week extract 7th and 8th item from the list.*/


let shoppingList = ["milk", "cheese", "bread", "juice", "wild salmon", "japanese wagyu sirloin steak", "shoulder of lamb", "potatoe", "greenveg", "sweetcorn", "chips,", "greenbeans", "asparacus", "aubugene", "orkra", "tomataos", "garlic", "chilie", "onions", "millionaire shortbread cheesecake", "fresh cream and ice cream", "chocolate", "coffee beans", "basket of fruits and nuts", "case of wine (your choice!)"];



let firtWeekOneToThree = shoppingList.slice(0, 3);


let secondWeekFourToSix = shoppingList.slice(3, 5);


let thirdWeekSevernToNine = shoppingList.slice(6, 8);

console.log(firtWeekOneToThree);
console.log(secondWeekFourToSix);
console.log(thirdWeekSevernToNine);

/* below i have arranged the removed items in a alphabetical order for the customer to be notified.  */


let sortedFromOne = firtWeekOneToThree.slice().sort();
let sortedFromSix = secondWeekFourToSix.slice().sort();
let sortedFromNine = thirdWeekSevernToNine.slice().sort();



console.log(sortedFromOne);
console.log(sortedFromSix);
console.log(sortedFromNine);