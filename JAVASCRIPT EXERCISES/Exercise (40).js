
// Unchanged Magicians: Start with your work from Exercise 40. 
// Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, 
// return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array
//  of the original names and one array with the Great added to each magician’s name.
var magicians=["David Copperfield","Lance Burton","Ricky Jay","Mark Wilson"]
function magician_show()
{
     for(var i=0;i<magicians.length;i++)
     {
      console.log(magicians[i])
     }
}
magician_show();
console.log("**ORIGINAL AND GREAT COPY SEPARATED**")
function make_great(){
    for(var i=0;i<magicians.length;i++)
    {
     console.log(`Great ${magicians[i]}`)
    }
}
make_great();