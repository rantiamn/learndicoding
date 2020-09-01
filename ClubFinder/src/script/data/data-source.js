import clubs from './clubs,js'
const main = function () {
   const searchElement = document.querySelector("#searchElement");
   const buttonSearchElement = document.querySelector("#searchButtonElement");
   const clubListElement = document.querySelector("#clubList");


   const onButtonSearchClicked = function () {
       class dataSource {
         static searchClub(keyword) {
           return new Promise((resolve, reject) => {
             const filteredClubs = clubs.filter(club => club.name.toUpperCase().includes(keyword.toUpperCase()));
             if (filteredClubs.length) {
               resolve(filteredClubs);
             } else {
               reject('${keyword} is not found"');
           }
         });
         }
       }
       const filteredClub = clubs.filter(club => club.name.toUpperCase().includes(keyword.toUpperCase()));
   };


   const renderResult = function (results) {
       clubListElement.innerHTML = "";
       results.forEach(function (club) {
           const name = club.name;
           const fanArt = club.fanArt;
           const description = club.description;


           const clubElement = document.createElement("div");
           clubElement.setAttribute("class", "club");


           clubElement.innerHTML = '<img class="fan-art-club" src="' + fanArt + '" alt="Fan Art">\n' +
               '<div class="club-info">\n' +
               '<h2>' + name + '</h2>\n' +
               '<p>' + description + '</p>' +
               '</div>';
           clubListElement.appendChild(clubElement);
       })
   };


   const fallbackResult = function (message) {
       clubListElement.innerHTML = "";
       clubListElement.innerHTML += '<h2 class="placeholder">' + message + '</h2>'
   };


   buttonSearchElement.addEventListener("click", onButtonSearchClicked);
};
