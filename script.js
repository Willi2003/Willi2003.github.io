window.addEventListener("DOMContentLoaded", function() {

    let projects = document.querySelector("#projects")

    projects.addEventListener("click", function() {
        window.scrollTo({top: 1160, behavior: 'smooth'});
    })   

    let button_Perso = document.querySelector("#button_Perso")
    let button_Gryffondor = document.querySelector("#button_Gryffondor")
    let button_ReservationSystem = document.querySelector("#button_ReservationSystem")

    button_Perso.addEventListener("click", function() {
        window.open("https://github.com/Willi2003/Emir/tree/master/Java-Script/Perso", "_blank")
    })
    
    button_Gryffondor.addEventListener("click", function() {
        window.open("https://github.com/Willi2003/Emir/tree/master/Java-Script/JS1.Qu%C3%A9va.William.Gryffondor", "_blank")
    })

    button_ReservationSystem.addEventListener("click", function() {
        window.open("https://github.com/Willi2003/Alex/tree/master/mvc_reservationSystem", "_blank")
    })

})