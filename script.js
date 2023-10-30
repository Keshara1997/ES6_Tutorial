// window.onload = function() {
//     const pi = 3.142;

//     function calculateArea(radius){
//         return pi * radius * radius;
//     }
   

//     let radius = prompt("Enter the radius of the circle");
//     let area = calculateArea(radius);
//     console.log("Area of the circle is: " + area);
      

// }


window.onload = function() {

    var items = document.getElementsByTagName("li");
    
    for (var i = 0; i < items.length; i++) {
        items[i].onclick = function(e) {
            console.log(e.target.innerHTML);
        }
    } 
}
