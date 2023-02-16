//More context and practice of methods in Javascript

/*
What makes up a method?



*/

//Old JS of method
/*
First is keyword, function, to let JS know that this bit of code is a method and the
second work is the name of the method.  The () indicates if there is any params for this method
and the { } is tell JS to run only the code within { } until the method has complete and move on
*/
function whatIsInMethod() { 
  console.log("This is a simple method")
}

//Arrow method
const whatIsInArrow = () => { 
  console.log("This is a simple arror method/function")
}

/*
What is the difference between the arrow method/function and using the keyword function.  At the moment of learning web programming...nothing.
There will be more advance differences laters
*/



/*
I am going to try and make something that could be used in a real world scenario.  I am going to make
*/
const param = true;

const executeMethod = (param) => { 
  if (param) { 
    console.log("Test")
  }
}
// executeMethod(param)