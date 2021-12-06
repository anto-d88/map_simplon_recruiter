async function generateFilter() {
  await fetch(url)
  .then(function (data) {
    return data.json();
  })
  .then(function (json) {
    console.log(json);
    let option = document.getElementById("missionFilter");
    option.innerHTML = `<option value="">Toutes les missions</option>`;
      // Récuperer le conteneur de formation avec la classe "active"
      let activeFormation = document.getElementsByClassName("active");
      // On récupère les éléments enfants de la sections active
      let modales = activeFormation[0].childNodes;
    console.log(modales);
  for (let i = 0; i < modales.length; i++) {
    let id = modales[i].id;
    let jsonindex = id.substr(1);
    console.log(jsonindex);
    // On parcour les missions de chaque formations de la class active
    for (let j = 0; j < json[jsonindex].missions.length; j++) {
      console.log(json[jsonindex]);
      if(!option.innerHTML.includes(json[jsonindex].missions[j].mission)){
      // On génère un Element HTML option
      let opt = document.createElement("option");
      // On lui attribue la valeur et le Texte contenu
      opt.setAttribute("value", json[jsonindex].missions[j].mission);
      opt.textContent = json[jsonindex].missions[j].mission;
      option.appendChild(opt);

      //console.log(opt);
      }
    }
  }
});
}
