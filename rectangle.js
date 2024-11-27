function calculateRectangleArea(){    
    // get the width 
    const rectangleWidth = document.getElementById('rectangle-width');
    const rectangleWidthValue = rectangleWidth.value;
    const width = parseFloat(rectangleWidthValue);
    console.log(width);

    // get the length
    const rectangleLength = document.getElementById('rectangle-length');
    const rectangleLengthValue = rectangleLength.value;
    const length = parseFloat(rectangleLengthValue);
    console.log(length); 

    // area
    const rectangleArea = width*length;
    console.log(rectangleArea);

    // show the area on the UI
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = rectangleArea; 


}