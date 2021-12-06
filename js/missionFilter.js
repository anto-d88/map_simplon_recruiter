let filter;
function missionFilter() {
  fetch(url)
    .then(function (data) {
      return data.json();
    })
    .then(function (json) {

      // On déclare un array qui va stocker les missions des formations enfants de la section actives
      let option = document.getElementById("missionFilter");
      filter = option.options[option.selectedIndex].value;
      // Récuperer le conteneur de formation avec la classe "active"
      let activeFormation = document.getElementsByClassName("active");
      console.log(activeFormation);
      // On récupère les éléments enfants de la sections active
      let modales = activeFormation[0].childNodes;
      // console.log(modales);
      // On parcours la liste des formation et on garde leurs ID pour aller trouver les infos missions dans le JSON
      for (let i = 0; i < modales.length; i++) {
        let id = modales[i].id;
        let jsonindex = id.substr(1);
        // console.log(jsonindex);
        // On parcour les missions de chaque formations
        for (let j = 0; j < json[jsonindex].missions.length; j++) {
          // On compare l'array des missions avec la valeur Filtre
          // console.log(json[jsonindex].missions[j].mission);
          if (filter != "" && json[jsonindex].missions[j].mission == filter) {
            // console.log("MISSIONS ARE : " +json[jsonindex].missions[j].mission +" FILTER IS " +filter);
            // Si l'array de missions ne contient pas le filtre alors on cache la formation correspondante
            document.getElementById(modales[i].id).style.display = "block";
            // console.log(document.getElementById(modales[i].id));
            // console.log(modales[i].id);
            i++;
          }
          if (filter == "") {
            document.getElementById(modales[i].id).style.display = "block";
          } else {
            // console.log(json[jsonindex].missions.includes(filter));
            document.getElementById(modales[i].id).style.display = "none";
          }
        }
      }
      console.log(filter);
    });
}
