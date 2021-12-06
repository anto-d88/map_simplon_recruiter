function generateHtmlCard(
  tagId,
  id,
  city,
  name,
  date,
  duree,
  aprenticeship,
  lvl,
  learners,
  formationLink
) {
  //Le conteneur de la carte formation(contenu dans id my modal avec class modal) aura
  let card = document.createElement("section");
  card.setAttribute("class", "modal");
  card.setAttribute("id", "F" + id);
  //Conteneur du Contenu pour stylizer
  let container = document.createElement("article");
  container.setAttribute("class", "modal-content");
  // Le conteneur titre et alternance
  let titleNalternance = document.createElement("div");
  titleNalternance.setAttribute("class", "modal-header");
  // Le titre de la Formation
  let title = document.createElement("h2");
  title.textContent = name;
  // En Alternance ou non
  let aprentice = document.createElement("h5");
  aprentice.textContent = "ALTERNANCE";
  if (!aprenticeship) {
    aprentice.style.display = "none";
  }
  let list = document.createElement("ul");
  list.setAttribute("class", "modal-body");
  //date de début
  let startDate = document.createElement("li");
  startDate.innerHTML = "<img src='img/date.svg' alt='Logodate'>" + " " + date;
  //durée
  let during = document.createElement("li");
  during.innerHTML = "<img src='img/durée.svg' alt='Logodurée'>" + " " + duree;
  //sortie Niveau
  let outLevel = document.createElement("li");
  outLevel.innerHTML = "<img src='img/lvl.svg' alt='Logolvl'>" + " " + lvl;
  //Nb Apprenants
  let nbLearner = document.createElement("li");
  nbLearner.innerHTML =
    "<img src='img/learners.svg' alt='Logolearners'>" + " " + learners;
  //Lien pour découvrir la session
  let btnrack = document.createElement("section");
  btnrack.setAttribute("class", "btnrack");
  let link = document.createElement("a");
  let detail = document.createElement("div");
  detail.setAttribute("class", "detailbtn");
  detail.textContent = "Missions";
  detail.setAttribute("id", id);
  btnrack.setAttribute("class", "modal-footer");
  link.setAttribute("href", formationLink);
  link.setAttribute("class", "linkbtn");
  link.textContent = "Détails";

  card.appendChild(container);
  titleNalternance.appendChild(title);
  titleNalternance.appendChild(aprentice);
  container.appendChild(titleNalternance);
  container.appendChild(list);
  list.appendChild(startDate);
  list.appendChild(during);
  list.appendChild(outLevel);
  list.appendChild(nbLearner);
  container.appendChild(btnrack);
  btnrack.appendChild(link);
  btnrack.appendChild(detail);

  let page = document.getElementById(tagId);
  page.appendChild(card);
}




async function emptyfomations() {
  await generateAllFormation;
  allFormationsElements = document.getElementsByClassName("cityCardContainer");
  // console.log(allFormationsElements);
  for (let i = 0; i < allFormationsElements.length; i++) {
    // console.log(allFormationsElements[i].childNodes)
    if (allFormationsElements[i].childNodes.length == 0) {
      let empty = document.createElement("h1");
      empty.setAttribute('class', 'emptyFormations')
      empty.textContent =
        "Oups ! Il Semblerait qu'il n'y ait aucune formation en cours ou à venir là bas pour le moment !";
        allFormationsElements[i].appendChild(empty);
    }
  }
}

