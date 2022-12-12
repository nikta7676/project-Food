function timer(id,deadLine){
    
    function formDate(string){
     let days,hours,minutes,seconds;

     const t = Date.parse(string)-Date.parse(new Date());
     if(t <= 0){
         days = 0;
         hours = 0;
         minutes = 0;
         seconds = 0;
     }else{
           days = Math.floor(t/(1000*60*60*24)),
           hours =Math.floor((t/(1000*60*60))%24),
           minutes =Math.floor((t/(1000*60))%60),
           seconds = Math.floor((t/1000)% 60);
     }
           return {t, days, hours, minutes, seconds};
    }

    function getZero(num){
     if( num<10 && num >=0){
         return `0${num}`;
     }else{
         return num;
     }
    }

    function innerTime(selector, string){
     const timer = document.querySelector(selector),
           days = timer.querySelector("#days"),   
           hours = timer.querySelector("#hours"),
           minutes = timer.querySelector("#minutes"),
           seconds = timer.querySelector("#seconds"),
           inner = setInterval(getTimeRemaining, 1000);

         

         getTimeRemaining();
         function getTimeRemaining(){
         const t = formDate(string);

             days.innerHTML= getZero(t.days);
             hours.innerHTML = getZero(t.hours);
             minutes.innerHTML = getZero(t.minutes);
             seconds.innerHTML = getZero(t.seconds);

             if(t.t <=0){
                 clearInterval(inner);
             }
         }     
    }
     innerTime(id,deadLine);
}

export default timer;