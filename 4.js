//Create a funtion to calculate thgis area of rectangle given its width and height 

function areaOfRectangle(width,hight){
    return width*hight;
}

 let area = areaOfRectangle(15,10);
console.log("Area of Rectangle is :" + area);

// using Arrow Funtion

let areaOfRectangle =(width,hight)=>{
    return width*hight;
}
let Area= areaOfRectangle(20,15);
console.log("Area of rectangle is:"+ Area);
