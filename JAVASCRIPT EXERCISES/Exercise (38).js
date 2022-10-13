// Large Shirts: Modify the make_shirt() function so that shirts are large by
// default with a message that reads I love JavaScript. Make a large shirt and a medium shirt with the default message,
// and a shirt of any size with a different message.

function T_shirt(size,message)
{
    console.log("THE SIZE OF SHIRT IS: \n"+size)
    console.log("YOUR MESSAGE ON SHIRT WILL BE: \n"+message)
}

function T_shirt(size,message)
{
    console.log("THE SIZE OF SHIRT IS: \n"+size)
    console.log("YOUR MESSAGE ON SHIRT WILL BE: \n"+message)
}
function T_shirt(size="large",message)
{
    console.log("THE SIZE OF SHIRT IS: \n"+size)
    console.log("YOUR MESSAGE ON SHIRT WILL BE: "+message)
}
T_shirt(undefined,"I LOVE JAVASCRIPT")

function T_shirt(size="medium",message)
{
    console.log("THE SIZE OF SHIRT IS: \n"+size)
    console.log("YOUR MESSAGE ON SHIRT WILL BE: "+message)
}
T_shirt(undefined,"I lOVE JAVASCRIPT")

function T_shirt(size="small",message)
{
    console.log("THE SIZE OF SHIRT IS: \n"+size)
    console.log("YOUR MESSAGE ON SHIRT WILL BE: "+message)
}
T_shirt(undefined,"I AM CODING IN JAVASCRIPT")