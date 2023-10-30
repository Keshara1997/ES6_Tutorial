// window.onload = function() {
//     const pi = 3.142;

//     function calculateArea(radius){
//         return pi * radius * radius;
//     }
   

//     let radius = prompt("Enter the radius of the circle");
//     let area = calculateArea(radius);
//     console.log("Area of the circle is: " + area);
      

// }


// window.onload = function() {

//     var items = document.getElementsByTagName("li");
    
//     for (var i = 0; i < items.length; i++) {
//         items[i].onclick = function(e) {
//             console.log(e.target.innerHTML);
//         }
//     } 
// }

// window.onload = function() {
//     function Person(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     Person.prototype.greet = function() {
//         console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
//     }
//     var person = new Person("John", 21);
//     person.greet();
//     var person2 = new Person("Mary", 19);
//     person2.greet();
// }

// window.onload = function() {
//     var num1= [1,2,3,4,5,6,7,8,9,10];
//     var num2 = [...num1, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

//     console.log(num2);
// }

//  window.onload = function() {
//     var num1= [1,2,3,4];

//     function sumUp(toAdd) {
//         let result = 0;
//         for (let i = 0; i < toAdd.length; i++) {
//             result += toAdd[i];
//         }
//         return result;
//     }

//     console.log(sumUp(num1));
// }


//  window.onload = function() {
//     function seka (name, age) {
//        console.log("Hello, my name is " + name + " and I am " + age + " years old.");

//     }
//     seka("John", 21);
   
   
// }


// window.onload = function() {
//    var str = "good morning";

//    if (str.startsWith("good")) {
//      var str2 = str.replace("good", "bad");
//    }
//    console.log(str2);
//    }
 

// window.onload = function() {
  
//    var ninja = {
        
//          chop: function(x) {
//             console.log("you chopped the enemy " + x + " times");
//          }
//       }
//       console.log(ninja.chop(5));
//    } 

window.onload = function() {  
   var ninja = {
      
      cho(x) {
         var _this = this;
         window.setInterval(function() {
            if (x > 0) {
               console.log("you chopped the enemy " + x + " times");
               x--;
            }
         }, 1000);
      }
   };
   ninja.cho(50);
  
}




