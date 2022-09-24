let stillRunning = true;
let customText = ""; // Add the known text here, between the "". E.g. the price of the ticket or name of the club for the afterparty.
customText.toLowerCase();
const randomButton = document.querySelectorAll("button")[5]; // <-- Don't ask, I don't know ":D"

function updatePage(){
    if(stillRunning){
        if(document.getElementsByClassName("o-align-items--flex-start").length != 0){
            let parsedList = document.getElementsByClassName("o-align-items--flex-start");
            for( let i=0; i<parsedList.length; i++){
                if(parsedList[i].innerText.toLowerCase().includes(customText)){
                    parsedList[i].click();
                    stillRunning = false;
                    break;
                }
            }
        } else {
            pushButton();
        }
    }
}
function pushButton(){
    randomButton.click();
}

window.addEventListener("keydown", (event) =>{
    if(event.defaultPrevented){
        return;
    }
    if(event.keyCode == 39){ // Keycode for right arrow button
        updatePage();
    }
})
