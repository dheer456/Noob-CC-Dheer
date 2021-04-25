
function newtime() {
    var time = new Date();
    var hour = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    
  
   if(hour<10){
     hour="0"+hour;
   }
   if(min<10){
    min="0"+min;
  }
  if(sec<10){
    sec="0"+sec;
  }
    var currentTime = hour + ":" 
            + min + ":" + sec ;
  
    document.getElementById("clock")
            .innerHTML = currentTime;
}
newtime();
setInterval(newtime , 1000);
