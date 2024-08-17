const sites = [
  "https://www.youtube.com/watch?v=ff0qjW_thH0", // calle luna calle sol
  "https://www.youtube.com/watch?v=_znPZ7BeEFs", // beleza pula
  "https://www.youtube.com/watch?v=FtGNseh_IQw", // weather report
  "https://www.youtube.com/watch?v=yfgV3vGrktI", // big take over
  "https://www.youtube.com/watch?v=iaY-q-SDrf0", // vieja luna
  "https://www.youtube.com/watch?v=o-liUFpa9ZQ", // chocolate matter
  "https://www.youtube.com/watch?v=sSzta-eZgO8", // yurameki in the air (╥﹏╥)
  "https://www.youtube.com/watch?v=4LnVfbE8dh0", // im fresh
  "https://www.youtube.com/watch?v=sX79JY9O_5k", // el baile y el salón
  "https://www.youtube.com/watch?v=Pg6e36mHQ5g", // amor amarillo
  "https://www.youtube.com/watch?v=X-lUnbIKYlo", // blue lines
  "https://www.youtube.com/watch?v=6EWXbKkr4qU", // indestructible
  "https://www.youtube.com/watch?v=JZEdQZ6JECs", // oye lo que te conviene
  "https://www.youtube.com/watch?v=HsTDPDgxksw", // luna roja
  "https://www.youtube.com/watch?v=QIKt_moBxjI", // mic check a a 
  "https://www.youtube.com/watch?v=7MnwzPm1Vq0", // iceblink luck
  "https://www.youtube.com/watch?v=lYDaNWFlK2w", // beat laments th world
  "https://www.youtube.com/watch?v=bYaCpTecfTg", // daydream 
  "https://www.youtube.com/watch?v=IHvRY1SC9qw", // midnight in a  perfect world
  "https://www.youtube.com/watch?v=Ki7GrRTNYfU", // engaña
  "https://www.youtube.com/watch?v=HPcgbOHkEfk" // los liibros de la bueena memoria
] 
function randomSite(){
  var i = Math.floor(Math.random() * sites.length)
  location.href = sites[i]
};