var sites = ["https://youtu.be/PmGyACG5K0E", // birthday cake
  "https://youtu.be/ff0qjW_thH0", // calle luna calle sol
  "https://youtu.be/cTDK5Bluh5A", // beleza pula
  "https://youtu.be/fJDCC9IK2tY", // weather report
  "https://youtu.be/5NAPYIMMbWQ",// big take over
  "https://youtu.be/AXN-_asIaYs" // quimbara
] 
function randomSite(){
  var i = Math.floor(Math.random() * sites.length)
  location.href = sites[i]
};