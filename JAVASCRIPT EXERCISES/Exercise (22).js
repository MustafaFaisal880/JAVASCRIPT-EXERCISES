// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
//
// • If the alien is yellow, print a message that the player earned 10 points.
//
// • If the alien is red, print a message that the player earned 15 points.
//
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

var alien_color=['green','yellow','red']

for(var i=0;i<alien_color.length;i++)
{
    if(alien_color[i]=='red')
    {
        console.log('\nYOU EARNED 5 POINTS')
    }
    else if (alien_color[i]=='green'){
        console.log('\nYOU EARNED 15 POINTS')
    }
    else
    {
        console.log("\nYOU EARNED 10 POINTS ")
    }
}