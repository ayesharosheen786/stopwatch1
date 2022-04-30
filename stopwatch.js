window.onload=function(){
    var seconds=00;
    var tens=00;
    var appendtens=document.getElementById("tens");
    var appendseconds=document.getElementById("seconds");
    var buttonstart=document.getElementById("button-start");
    var buttonstop=document.getElementById("button-stop");
    var buttonreset=document.getElementById("button-reset");
    var Interval;
    buttonstart.onclick=function(){
        clearInterval(Interval);
        Interval=setInterval(startTimer,10);

    }
    buttonstop.onclick=function(){
        clearInterval(Interval);

    }
    buttonreset.onclick=function(){
        clearInterval(Interval);
        tens="00";
        seconds="00";
        appendtens.innerHTML=tens;
        appendseconds.innerHTML=seconds;

    }
    function startTimer(){
        tens++;
        if(tens<=9)//4
        {
            appendtens.innerHTML="0"+tens;
        }
        if(tens>9){//35
            appendtens.innerHTML=tens;
        }
        if(tens>99)
        {
            console.log("seconds");
            seconds++;
            appendseconds.innerHTML="0"+seconds;
            tens=0;
            appendtens.innerHTML="0"+0;
        }
        if(seconds>9)
        {
            appendseconds.innerHTML=seconds;
        }
    }
}