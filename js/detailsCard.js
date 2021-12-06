function modalDetails(json){
// On Récupère toutes les modales
let modals = document.getElementsByClassName('detailbtn');
//console.log(modals);
// On les défiles dans une boucle pour leur assigner à tous un event listener
for (let i = 0; i < modals.length; i++) {
  modals[i].addEventListener('click', function(){
    let sidedetails = document.getElementById("detailsMissions")
    sidedetails.innerHTML = "";
    // L'orsque l'on clique sur la fiche on récupère l'ID de l'event Target
    let clickedMissions = json[modals[i].id].missions;
    //console.log(clickedMissions);
    // On va récupérer les missions dans le Json
    for (let j = 0; j < clickedMissions.length; j++) {
      // On remplis le TextContent de l'aside à partir des missions
      sidedetails.appendChild(document.createElement("li")).textContent = clickedMissions[j].mission;
      //sidedetails.textContent += clickedMissions[j];
    }
  });
  }
}
// displayDetails()


