// ** Challenge ** 

// 1. Write a function to find the perimeter of a rectangle.
const calculatePerimeter = (width, height) => {
    return width * 2 + height * 2;
};

// 2. Write a function to find the area of a circle. When given a radius, print the area to the console.
const calculateArea = (radius) => {

    const area = Math.PI * radius * radius;
    return area;
};

console.log(calculateArea(2));

// 3. Now do the same to find the circumference of a circle. 
const calculateCircumference = (radius) => {

    circumference = 2 * Math.PI * radius;
    return circumference;
}

console.log(calculateCircumference(5));
