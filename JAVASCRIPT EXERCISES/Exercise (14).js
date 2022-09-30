// Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//
// • Print a second set of invitation messages, one for each person who is still in your list.

console.log(" \n \tGANDHI CAN'T MAKE IT TO THE PARTY :(")
console.log(" \n \tSO SENDIND NEW INVITES: ")


for( var i = 0; i < invites.length; i++){

    if ( invites[i] === "TESLA") {

        invites.splice(i, 1,"MUSTAFA");
    }

}
for(var i=0 ;i<invites.length;i++)
{
    console.log(`\n \tHi ${invites[i]} you are invited to my another code party`)
}