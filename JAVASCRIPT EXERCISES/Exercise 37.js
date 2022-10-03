// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more 
// comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array

console.log("Tests for equality and inequality with strings")
let no = 1;
console.log("Is no == '2'? I predict False.")
console.log(no !== 1)

console.log("Tests using the lower case function")
let us = 'HAND';
console.log("Is us == 'hand'? I predict false.")
console.log(us == 'hand')

console.log("Test whether an item is in a array")
let trans = ['subaru','honda'];
console.log("Is trans[1] === honda ? I predict true.")
console.log(trans[1] == "honda")


console.log("Test whether an item is not in a array")
let Uo = ['subaru'];
console.log("'subaru' !== Uo[0]? I predict false.")
console.log('subaru' !== Uo[0])

console.log("Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to")
let number = 10
console.log("5 < number? I predict true.")
console.log(number > 5 )

let first=5
let second=6

console.log("USING AND FUNCTION")
if(first==5&&second==6){
console.log(true)
}

console.log("USING OR FUNCTION")
if(first==5||second==7){
console.log(false)
}
