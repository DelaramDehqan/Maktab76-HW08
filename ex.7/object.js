// Create an object named dog from the sample object below using the prototype inheritance



let animal = {
    speaks: true,
    walk() {
      
    }
  };
  
  let dog = {
    __proto__: animal
  };
  
  dog.walk = function() {
    // alert("dog! Chekhe-chekhe!");
    console.log("Animal walks");
  };
  
  dog.walk();


