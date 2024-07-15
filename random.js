var sites = [
  "https://www.youtube.com/watch?v=ff0qjW_thH0", // calle luna calle sol
  "https://www.youtube.com/watch?v=_znPZ7BeEFs", // beleza pula
  "https://www.youtube.com/watch?v=FtGNseh_IQw", // weather report
  "https://www.youtube.com/watch?v=yfgV3vGrktI", // big take over
  "https://www.youtube.com/watch?v=iaY-q-SDrf0", // CUANDO SE ASOMA LA SONRISA BLANCA EEEEEEN LA MAÑANA DE MI ADVERSIDAAAAAAA
  "https://www.youtube.com/watch?v=o-liUFpa9ZQ", // chocolate matter
  "https://www.youtube.com/watch?v=sSzta-eZgO8", // yura yurameki in the air (╥﹏╥)
  "https://www.youtube.com/watch?v=4LnVfbE8dh0", // thaiboy goon im fresh as fuck
  "https://www.youtube.com/watch?v=sX79JY9O_5k", // NOS BESAMOS BAILANDO EN MEDIO DEL LUGAA el baile y el salón
  "https://www.youtube.com/watch?v=Pg6e36mHQ5g", // AAAADENTRO TUYO CAIIIIIIIIIIGO DEL SOOO amor amarillo
  "https://www.youtube.com/watch?v=X-lUnbIKYlo", // blue lines
  "https://www.youtube.com/watch?v=6EWXbKkr4qU", // INDESTRUCTIBLE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! EESEE ESE SOY YO
  "https://www.youtube.com/watch?v=JZEdQZ6JECs", // mi guaguancóóóóóóóóóóóó      ;3 oyeloquete conviente
  "https://www.youtube.com/watch?v=HsTDPDgxksw", // LUNA ROJA
  "https://www.youtube.com/watch?v=QIKt_moBxjI", // Mic Check a a 
  "https://www.youtube.com/watch?v=7MnwzPm1Vq0", // SEEMINNGG TO BEEEEAAAAAAHHH LEEEEELAAAHAHHHH. iceblink luck
  "https://www.youtube.com/watch?v=lYDaNWFlK2w" // FLOW IS PLAYED OUT MONEY U NEED TO GET THAT SHIT IN STYLE beat laments th world
] 
function randomSite(){
  var i = Math.floor(Math.random() * sites.length)
  location.href = sites[i]
};