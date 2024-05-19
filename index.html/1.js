console.log("this is a container");
let name = "sagar";
let name1 = "amrit";
let name2 = "appu";
let name3 = "aman";
console.log(name + " is a good boy");
console.log(name1 + " is a good boy");
console.log(name2 + " is a good boy");
console.log(name3 + " is a good boy");

// by using function //

function sagar(name) {
    console.log(name + " is a good boy");
}
//call the function having name sagar and parameter is name //
sagar(name);
sagar(name1);
sagar(name2);
sagar(name3);

// Lets make another function having two parameters //

     let text = "good morning";

function hammer(text,name) {
    console.log(text + " " + name);
}
hammer(text,name);
hammer(text,name1);
hammer(text,name2);
hammer(text,name3);
 
// lets make one another function //

 function red(name,text) {
    console.log(text + " " + name);
    console.log(name + " is a bad boy");
 }
 red(name,text);
 red(name1,text);
 red(name2,text);
 red(name3,text);
