// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//
// • Add one new guest to the beginning of your array.
//
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

const invites = ['GANDHI','ALBERT EINSTEIN','TESLA']
for(var i=0 ;i<invites.length;i++)
{
    console.log(`\nHi ${invites[i]} you are invited to my code party`)
}


console.log(" \n \t***** GANDHI CAN'T MAKE IT TO THE PARTY :( *****")
console.log(" \n \t ****** SO SENDIND NEW INVITES: *****")


for( var i = 0; i < invites.length; i++){

    if ( invites[i] === "TESLA") {

        invites.splice(i, 1,"MUSTAFA");
    }

}
for(var i=0 ;i<invites.length;i++)
{
    console.log(`\n \tHi ${invites[i]} you are invited to my another code party`)
}

console.log(" \n***** MAKE ROOM FOR 3 MORE GUESTS ******")

invites.push("HASNAIN")
invites.unshift("FAHAD")
invites.splice(4,1,"SHEES")
console.log(invites)
for(var i=0 ;i<invites.length;i++)
{
    console.log(`\n \tHi ${invites[i]} you are invited to my another code party`)
}



