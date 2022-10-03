// Name Cases: Store a person’s name in a variable, and
// then print that person’s name in lowercase, uppercase, and titlecase.



                                       // 2 EXERCISE:

let name="MUSTAFA"
console.log("UPPERCASE: "+name.toUpperCase())
console.log("LOWERCASE: "+name.toLowerCase())
function titleCase(str)
{
    var word =str.toLowerCase().split(" ")
    for(var i=0; i<word.length;i++)
    {
        word[i]=word[i][0].toUpperCase() + word[i].slice("1")
    }
    console.log("TITLECASE: "+word.join(" "));
}
titleCase("mustafa faisal")
