/*
* Excercise 1
*
*/



/*
* Then write a function that changes the text and the color inside the div
*
*/
const box = document.getElementById("color-block");
const text = document.getElementById("color-name");
// button.onclick = buttonClicked;
box.addEventListener("click", changeColor);
function changeColor(){
    // const box = document.getElementById("color-block");
    //Write a condition determine what color it should be changed to
    if(box.getAttribute("id") === "color-block"){
        box.setAttribute("id", "color-block-new");
        text.innerHTML = "#800080";
    }else{
        box.setAttribute("id", "color-block");
        text.innerHTML = "#F08080";
    }
}


/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/
// const inputVal = document.getElementById("f-input").value;
const cdisplay = document.getElementById("c-output");
const button = document.getElementById("convertbtn");
button.addEventListener("click", convertTemp);
/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

function convertTemp(){
    const inputVal = document.getElementById("f-input").value;
    //Calculate the temperature here
    console.log(inputVal)
    outputVal = (inputVal - 32) * 5/9;
    //Send the calculated temperature to HTML
    cdisplay.innerHTML = Math.round(outputVal);
}


