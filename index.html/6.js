

   function sum(){
    let a = 3;
    let b = 7;
    let sum = a+b;
    console.log("the sum of two numbers is = " + sum);
   }
//    calling of function
   sum()

   function difference(){
    let a = 3;
    let b = 7;
    let difference= b-a;
    console.log("the difference of a and b is = "+ difference);
   }
//    calling of function
   difference()


   function condition(text){
    let a="a";
    let b="b";
    let c="c";
    if(text==a){
        console.log("Apple")
    }
    else if (text==b) {
        console.log("Banana")
    }
     else if(text==c){
        console.log("Cat")
    }
    else{
        console.log("None of these ")
    }
   }
  let c="c";
   condition(c)


   function check(num){
    if(num%3===0){
        console.log("fizz")
    }
    else if(num%5===0){
        console.log("buzz")
       
    }
    else{
        console.log("none of these")
    }
   }
   check(45)