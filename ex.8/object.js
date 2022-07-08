// Write a program with the constructor called Student that includes the name and gender
// fields of the fields
// 1. Create the studObj1 variable from the new Student and add the age field with the
// prototype
// 2. Create the studObj2 variable from the studObj1 and change value age field to 20
// with the prototype

// constructor function

function Student (person_name, person_age, person_gender) {

     this.name = person_name,
     this.age = person_age,
     this.gender = person_gender,
 
     this.greet = function () {
         return ('Hi' + ' ' + this.name);
     }
 }
 
 const studObj1 = new Student('sam', 23, 'male');
 const studObj2 = new Student('sara', 20, 'female');

 console.log(studObj1.name); 
 console.log(studObj2.name); 


  
 