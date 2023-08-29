// Q1.  Problem:   Create 2 objects - parent and child. Attach methods to parent and use those methods in 
//child object using parents prototype

//Ans:  
        // function Parent(name) {
        //   this.name = name;
        // }
        // Parent.prototype.greet = function() {
        //   console.log(`Hello, my name is ${this.name}`);
        // };
        // function Child(name, age) {
        //   Parent.call(this, name); // Call parent constructor to set the name
        //   this.age = age;
        // }
        // Child.prototype = Object.create(Parent.prototype);
        // Child.prototype.introduce = function() {
        //   console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old`);
        // };
        // const parent = new Parent("John");
        // const child = new Child("Alice", 5);
        // parent.greet();  
        // child.greet();      
        // child.introduce();   

//Reason:
        // In this example, the Parent constructor creates the parent object with a name property and the greet method. 
        // The Child constructor calls the Parent constructor using Parent.call(this, name) to set the name property, 
        // and then it adds an age property. The Child constructor's prototype is set to an object created by 
        // Object.create(Parent.prototype), establishing the inheritance link. Finally, the introduce method is added 
        // to the Child prototype, which is then available for instances of the child object.
        // When you create instances of the parent and child objects, you can see that both parent and child can use 
        // the methods from the parent's prototype, demonstrating inheritance in JavaScript.


// Q2.  Problem:   Write code to explain prototype chaining.

//Ans:  
        class Person {
          constructor(name) {
            this.name = name;
          }
          sayName() {
            console.log(this.name);
          }
        }
        class Student extends Person {
          constructor(name, school) {
            super(name);
            this.school = school;
          }

          saySchool() {
            console.log(this.school);
          }
        }
        const student = new Student("John Doe", "MIT");
        student.sayName(); 
        student.saySchool(); 
// Reason:
// In the above code snippet, there are two classes, Person and Student, which demonstrate inheritance 
// and prototype chaining in JavaScript.

// student inherits the sayName() method from Person.prototype.
// Person.prototype inherits the sayName() method from Object.prototype.
// Object.prototype is the top of the prototype chain and contains common properties and methods for all JavaScript objects.
// This mechanism illustrates how objects in JavaScript inherit properties and methods through their prototype chain, 
// facilitating code reusability and maintaining an organized hierarchy of behavior.


// Q3.  Problem:   Add a method to calculate sum of all elements in Array in array's protype, use that 
//                 method to calculate sum for multiple arrays.

//Ans: 
        Array.prototype.calculateSum = function() {
          let sum = 0;
          for (let i = 0; i < this.length; i++) {
            sum += this[i];
          }
          return sum;
        };
        const array1 = [1, 2, 3, 4, 5];
        const array2 = [10, 20, 30];
        const array3 = [2, 4, 6, 8, 10];
        
        const sum1 = array1.calculateSum();
        const sum2 = array2.calculateSum();
        const sum3 = array3.calculateSum();

        console.log(`Sum of array1: ${sum1}`); // Output: Sum of array1: 15
        console.log(`Sum of array2: ${sum2}`); // Output: Sum of array2: 60
        console.log(`Sum of array3: ${sum3}`); // Output: Sum of array3: 30

// Reason:
//         We've added a calculateSum method to the Array.prototype. This method iterates through the elements of the array 
//         and calculates their sum. Then, we create three arrays (array1, array2, and array3) and use the calculateSum method 
//         to calculate the sum for each array.

// Q4.  Problem:   Write a JavaScript function to retrieve all the names of object's own and inherited properties.

//Ans: 
        class parent{
          constructor(carColor, carWheel) {
            this.carColor = carColor;
            this.carWheel = carWheel;
            }
        }
        parent.prototype.newProperty1 = 'property1';
        parent.prototype.newProperty2 = 'property2';
        parent.prototype.newProperty3 = 'property3';
        class child extends parent{
          constructor(carColor,carWheel,carName,carYear,carMaker){
            super(carColor,carWheel);
            this.carWheel = carWheel;
            this.carName = carName;
            this.carYear = carYear;
            this.carMaker = carMaker;
          }
        }
        let newChild = new child('Blue','4','Hurricane',2022,'Lamborghini')
        for(let key in newChild){
          if(newChild.hasOwnProperty(key))
            console. log( "newChild's Own Properties List =",key)
        else
          console.log( "newChild Own Properties List =",key)
        }
