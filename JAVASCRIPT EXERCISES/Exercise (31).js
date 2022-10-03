//                                  ******************TWO EXERCISE OF SHIRT************************


// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message 
// that should be printed on the shirt. The function should print a sentence
// summarizing the size of the shirt and the message printed on it. Call the function.

// Large Shirts: Modify the make_shirt() function so that shirts are large by
// default with a message that reads I love JavaScript. Make a large shirt and a medium shirt with the default message,
// and a shirt of any size with a different message.

console.log("ENTER THE SIZE OF SHIRT: ")
console.log("ENTER YOUR MESSAGE ON SHIRT: \n")
function T_shirt(size,message)
{
    console.log("THE SIZE OF SHIRT IS: \n"+size)
    console.log("YOUR MESSAGE ON SHIRT WILL BE: \n"+message)
}
T_shirt("small","HI")

function T_shirt(size="large",message)
{
    console.log("THE SIZE OF SHIRT IS: \n"+size)
    console.log("YOUR MESSAGE ON SHIRT WILL BE: "+message)
}
T_shirt(undefined,"IAM CODING WITH LARGE SHIRT")

function T_shirt(size="medium",message)
{
    console.log("THE SIZE OF SHIRT IS: \n"+size)
    console.log("YOUR MESSAGE ON SHIRT WILL BE: "+message)
}
T_shirt(undefined,"I AM WEARING MEDIUM SIZE SHIRT")
