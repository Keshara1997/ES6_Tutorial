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

window.onload = function() {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function() {
        console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
    }
    var person = new Person("John", 21);
    person.greet();
    var person2 = new Person("Mary", 19);
    person2.greet();
}
