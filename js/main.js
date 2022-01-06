const colone = document.querySelector(".colone");

const mapBoxToken =
  "pk.eyJ1IjoiYW50by1kODgiLCJhIjoiY2t2MjU2Ynd1MDA2NDJzbDd6NzJuOHZraCJ9.PS9rdISMovjLisdtF1LsDA";

//defines custom map pin
const logo = L.icon({
  iconUrl: "./img/logo.svg",
  iconSize: [50, 50],
});

let mymap = L.map("mapid").setView([50.63297, 3.05858], 9);

let Arras = L.marker([50.29301, 2.78186], {
  icon: logo,
})
  .addTo(mymap)
  .on("click", openNav)
  .on(
    "click",
    function () {
      let city = "modalArras";
      displayFormations(city);
    },
    false
  ).on("click", generateFilter); // Obligé de refaire une fonction pour passer un paramètre spécifique dans la fonction déclarée précédemment

let LouvreLensVallée = L.marker([50.43302, 2.82791], {
  icon: logo,
})
  .addTo(mymap)
  .on("click", openNav)
  .on(
    "click",
    function () {
      let city = "modalLens";
      displayFormations(city);
    },
    false
  ).on("click", generateFilter); // Obligé de refaire une fonction pour passer un paramètre spécifique dans la fonction déclarée précédemment

let lille = L.marker([50.63297, 3.05858], {
  icon: logo,
})
  .addTo(mymap)
  .on("click", openNav)
  .on(
    "click",
    function () {
      let city = "modalLille";
      displayFormations(city);
    },
    false
  ).on("click", generateFilter); // Obligé de refaire une fonction pour passer un paramètre spécifique dans la fonction déclarée précédemment

let Béthune = L.marker([50.53333, 2.63333], {
  icon: logo,
})
  .addTo(mymap)
  .on("click", openNav)
  .on(
    "click",
    function () {
      let city = "modalBethune";
      displayFormations(city);
    },
    false
  ).on("click", generateFilter); // Obligé de refaire une fonction pour passer un paramètre spécifique dans la fonction déclarée précédemment

let Boulognesurmer = L.marker([50.71667, 1.61667], {
  icon: logo,
})
  .addTo(mymap)
  .on("click", openNav)
  .on(
    "click",
    function () {
      let city = "modalBoulogne-sur-Mer";
      displayFormations(city);
    },
    false
  ).on("click", generateFilter); // Obligé de refaire une fonction pour passer un paramètre spécifique dans la fonction déclarée précédemment

let Calais = L.marker([50.95194, 1.85635], {
  icon: logo,
})
  .addTo(mymap)
  .on("click", openNav)
  .on(
    "click",
    function () {
      let city = "modalCalais";
      displayFormations(city);
    },
    false
  )
  .on("click", generateFilter); // Obligé de refaire une fonction pour passer un paramètre spécifique dans la fonction déclarée précédemment

let Roubaix = L.marker([50.69421, 3.17456], {
  icon: logo,
})
  .addTo(mymap)
  .on("click", openNav)
  .on(
    "click",
    function () {
      let city = "modalRoubaix";
      displayFormations(city);
    },
    false
  ).on("click", generateFilter); // Obligé de refaire une fonction pour passer un paramètre spécifique dans la fonction déclarée précédemment

let Valenciennes = L.marker([50.35, 3.53333], {
  icon: logo,
})
  .addTo(mymap)
  .on("click", openNav)
  .on(
    "click",
    function () {
      let city = "modalValenciennes";
      displayFormations(city);
    },
    false
  ).on("click", generateFilter); // Obligé de refaire une fonction pour passer un paramètre spécifique dans la fonction déclarée précédemment

L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken: mapBoxToken,
  }
).addTo(mymap);





//Nav Function
function openNav() {
  let side = document.getElementById("mySidenav");
  side.style.display = "block";
}

//=====================================================================

//Form Function
const btnForm = document.querySelector(".btn-contact");
const formulaire = document.querySelector(".contact");

const closeform = document.querySelector(".closebtnform");

btnForm.onclick = function () {
  formulaire.style.display = "block";
};

closeform.onclick = function () {
  formulaire.style.display = "none";
};
//=====================================================================

// MOCK JSON VARIABLE PASS IN COMENTARY FOR STRAPI
//let json = JSON.parse(formations);

//génère tous le html pour les formations à partir du fichier Json
function generateAllFormation(json) {
  for (let i = 0; i < json.length; i++) {
    generateHtmlCard(
      "modal" + json[i].ville,
      
      json[i].ville,
      json[i].nom,
      json[i].date,
      json[i].duree,
      json[i].alternance,
      json[i].lvl,
      json[i].learners,
      json[i].lien
    );
    //function parameters order: city,name, date, duree, aprenticeship, lvl, learners, formationLink
  }
}








//affiche règle le display dans le style en fonction de l'id mis en paramètre
function displayFormations(id) {
  missionFilter();
  let sect = document.getElementById(id);
  sect.classList.add("active");
  document.getElementById("selectedCity").textContent = "Formations à " + id.toString().replace("modal","");


  window.onclick = function (event) {
    if (event.target == sect) {
      sect.classList.remove("active");
      document.getElementById("mySidenav").style.display = "none";
      document.getElementById("detailsMissions").innerHTML = "";

    }
  };
}

function openMentions(){
  document.getElementById("mentionsLeg").style.display = "flex";
}

function closeMentions(){
  document.getElementById("mentionsLeg").style.display = "none";
}
