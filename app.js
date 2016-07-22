"use strict";
/*2*/ var max = 100;
      var i = 0;
/*3*/ for(i = 1; i < max; i++){
/*4*/   if(i % 15 == 0) console.log("FizzBuzz");
/*5*/     else if(i % 3 == 0) console.log("Fizz");
/*6*/     else if(i % 5 == 0) console.log("Buzz");
/*7*/     else console.log(i);
}
