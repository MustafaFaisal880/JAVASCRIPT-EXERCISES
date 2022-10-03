// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
// and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can
// invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time
// you pop a name from your list, print a message to that person letting them know you’re sorry you can’t 
// invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you 
// actually have an empty list at the end of your program.

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



console.log("I CAN ONLY INIVTE 2 PEOPLE")

for(var i=0;i<4;i++)
{
    invites.pop()
}
console.log(invites)

    for(var i=0;i<invites.length;i++)
    {
        console.log(`${invites[i]} YOU ARE INVITED`)
    }

    for(var i=0;i<invites.length;i++)
    {
        delete invites[i]
    }
console.log(invites)

