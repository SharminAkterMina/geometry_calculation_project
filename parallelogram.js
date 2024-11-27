
// for getting any Id
function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value ;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}

// for getting area
function setInnerTextById(elementId,area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}



function calculateParallelogramArea(){
    const breadth = getInputValueById('parallelogram-breadth');
    const height = getInputValueById('parallelogram-height');
    console.log(height);
    console.log(breadth);    

    const area= breadth*height;
    setInnerTextById('parallelogram', area);
}


