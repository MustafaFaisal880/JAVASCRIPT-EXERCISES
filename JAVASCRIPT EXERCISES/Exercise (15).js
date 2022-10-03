// More Guests: You just found a bigger dinner table, so now more space is available. 
// Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program 
// informing people that you found a bigger dinner table.
//
// • Add one new guest to the beginning of your array.
//
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the 
// end of your list. • Print a new set of invitation messages, one for each person in your list.

let invites = ['GANDHI','ALBERT','TESLA']
console.log(invites)
console.log("I FOUND A BIGGER TABLE!")
console.log(" \n***** MAKE ROOM FOR 3 MORE GUESTS ******")


console.log('ADDING HASNAIN TO THE LAST OF ARRAY')
invites.push("HASNAIN")

console.log("ADDING FAHAD IN BEGINNING")
invites.unshift("FAHAD")

console.log("ADDING SHEES IN MIDDLE")
invites.splice(2,0,"SHEES")

console.log(invites)

console.log(" \n \t ****** SO SENDIND NEW INVITES: *****")
for(var i=0 ;i<invites.length;i++)
{
    console.log(`\n \tHi ${invites[i]} you are invited to my another code party`)
}



