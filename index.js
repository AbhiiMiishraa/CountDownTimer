(function () {

    var hour=document.querySelector(".hour")
 
    var min=document.querySelector(".min")
  
    var sec=document.querySelector(".sec")
    
    var startBtn=document.querySelector(".start")
    var stopBtn=document.querySelector(".stop")
    var resetBtn=document.querySelector(".reset");
    
    var countDownTimer=null;
    
    startBtn.addEventListener("click",function()
        {
          
            if (hour.value == 0 && min.value == 0 && sec.value == 0) return;


    
            function startInterval()
            {
                startBtn.style.display="none" 
                stopBtn.style.display="initial" ;
                clearInterval(countDownTimer)

                countDownTimer=setInterval(()=>{
                    timer();
                },1000);
            }
            startInterval();
        }
    );


    function stopInterval(state)

    {
        startBtn.innerHTML=state==="paused"?"Continue Kar":"start";
        startBtn.style.display="initial" 
                stopBtn.style.display="none" ;
                clearInterval(countDownTimer)

    }



    function timer()
    {
         // Formatting the time - START
    if (sec.value > 60) {
        min.value++;
        sec.value = parseInt(sec.value) - 59;
      }
      if (min.value > 60) {
        hour.value++;
        min.value = parseInt(min.value) - 60;
      }
      min.value = min.value > 60 ? 60 : min.value;
      // Formatting the time - END

        if (hour.value == 0 && min.value == 0 && sec.value == 0) 
            {
                hour.value="";
                min.value="";
                sec.value="";
                stopInterval();
              
            }
          

            else if(sec.value!=0)
            {
                sec.value=`${sec.value-1}`;
            }

        else if(min.value!=0 && sec.value==0)
            {
                sec.value=59;
                min.value=`${min.value-1}`;
            }
            else if(hour.value!=0 && min.value==0)
                {
                    min.value=60;
                    hour.value=`${hour.value-1}`;
                }
    }

    stopBtn.addEventListener('click',function()
{
    stopInterval('paused')
})

resetBtn.addEventListener('click',function()
{
    hour.value=""
    min.value=""
    sec.value=""
    stopInterval()
})


})();

