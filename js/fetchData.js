const url = 'http://51.77.223.82/formations';
// Rquest to get datas from strapi API and feed data into HTML on Start
fetch(url)
.then(function(resp){
   return resp.json()
  })
.then(function(json){
  generateAllFormation(json);
  modalDetails(json);
  emptyfomations()
//console.log(json);
});
