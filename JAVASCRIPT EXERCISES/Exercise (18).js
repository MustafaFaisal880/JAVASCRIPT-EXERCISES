// Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
// print a message indicating the number of people you are inviting to dinner.
//

// Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
// print a message indicating the number of people you are inviting to dinner.
//

var invite=["KAMRAN","HASNAIN","FAHAD","ADNAN","ALI","HAQ"]
console.log(invite)
let l=0
    for(var i=0;i<invite.length;i++)
    {
        console.log(`${invite[i]} YOU ARE INVITED`)
        l++
    }
    console.log(`\nI AM INVITING ${l} PERSONS.`)
