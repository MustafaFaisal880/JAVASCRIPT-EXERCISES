// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has 
// been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list 
// to show that its order has changed.

let city=["KARACHI","LAHORE","ISLAMABAD","PESHAWAR","MUMBAI"]
console.log(city)
console.log("ORIGINAL ORDER")

console.log(city.slice().sort())
console.log("IT IS SORTED IN ALPHABETICAL ORDER")

console.log(city)
console.log("STILL NOT MODIFIED")

console.log(city.slice().reverse())
console.log("IT IS SORTED IN REVERSE ALPHABETICAL ORDER")

console.log(city)
console.log("STILL NOT MODIFIED")

// • Reverse the order of your list. Print the array to show that its order has changed.
city=["MUMBAI","PESHAWAR","ISLAMABAD","LAHORE","KARACHI"]
console.log(city)
console.log("ORDER OF THE LIST IS REVERSED")

// • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log(city.reverse())
console.log("ORDER IS REVERSED AGAIN SO THE ORIGINAL ORDER IS BACK")
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has 
// been changed.
console.log(city.reverse().sort())
console.log("ORDER OF THE LIST IS IN ALPHABETICAL ORDER")
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list 
// to show that its order has changed.
console.log(city.sort().reverse())
console.log("ORDER OF THE LIST IS REVERSED APLHABETICAL ORDER")
