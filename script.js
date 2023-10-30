window.onload = function() {
    const pi = 3.142;

    function calculateArea(radius){
        return pi * radius * radius;
    }
   

    let radius = prompt("Enter the radius of the circle");
    let area = calculateArea(radius);
    console.log("Area of the circle is: " + area);
      

}

