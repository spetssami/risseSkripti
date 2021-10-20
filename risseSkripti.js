let jokuBoolean = true
const nappula = document.querySelectorAll("button")[5];

function paivita(){
	if(jokuBoolean){
		if(document.getElementsByClassName("o-align-items--flex-start").length != 0){
			let omalista = document.querySelectorAll(".o-align-items--flex-start")
			for(let i=0; i<omalista.length; i++){
				if(omalista[i].innerText.includes("E4")){
					omalista[i].click()
					jokuBoolean = false
					continue;
				}
			}
		} else {
			painaNappulaa()
		}
	}
}

function painaNappulaa(){
	nappula.click()
}

window.addEventListener("keydown", (event) => {
	if (event.defaultPrevented) {
		return;
    }
    if (event.keyCode == 39){ //Oikea nuolinäppäin
		paivita()
    }
})
