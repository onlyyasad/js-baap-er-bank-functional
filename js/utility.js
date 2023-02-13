
// This function will take the value from input area a, convert it to an integer, and return the value 
function getInputValueById(inputFieldId){
    const inputValueString = document.getElementById(inputFieldId).value;
    const inputValue = parseFloat(inputValueString);
    document.getElementById(inputFieldId).value = "";
    return inputValue;
}

// This function will take the value from the inner text of an element, convert it to an integer , and return the value 
function getElementInnerTextById(elementId){
    const elementValueString = document.getElementById(elementId).innerText;
    const elementValue = parseFloat(elementValueString);
    return elementValue;
}

// This function will set the new value/inner text to an element 

function setElementInnerTextById(elementId, text){
    document.getElementById(elementId).innerText = text.toFixed(2);
}
