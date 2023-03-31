//Show Only Time Dynamic
let showDate = document.getElementById('click');
let span = document.getElementById('view')
showDate.onmouseover = function(){
    function update(){
        let data = new Date().toLocaleTimeString();
        span.innerHTML = data
    }
    setInterval(update, 1000)
}

//==============================================
//open popup window after 3 second with paragraph
let btnButton = document.getElementById('open-popup');
let closeIcon = document.getElementById('close');
let myPopUp = document.getElementById('poup-paragraph');
btnButton.onclick = function(){
    let pop = document.getElementById('poup-paragraph');
    pop.classList.toggle('toggle')
    closeIcon.classList.toggle('toggle') 
}
closeIcon.onclick = function(){
    myPopUp.classList.toggle('toggle')
    closeIcon.classList.toggle('toggle') 
}
//=======================================
