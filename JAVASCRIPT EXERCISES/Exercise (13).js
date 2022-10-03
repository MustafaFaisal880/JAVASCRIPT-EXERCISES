// Changing Guest List: You just heard that one of your guests can’t make the dinner,
//     so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.

let invites = ['GANDHI','ALBERT EINSTEIN','TESLA']
console.log("GANDHI CAN'T MAKE IT TO THE PARTY! \n")
invites[0]="FAHAD"
for(var i=0 ;i<invites.length;i++)
{
    console.log(`Hi ${invites[i]} you are still invited to my another code party`)
}
