console.log("finding factorial of a number");

var n= prompt("enter a number to find factorial");
var fact=1;
for(var i=n;i>=1;i--){
  fact=fact*i;
}
console.log("factorial of "+ n + " is " + fact);
