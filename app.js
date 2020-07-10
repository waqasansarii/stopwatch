var min = 00;
var sec = 00;
var msec = 00;
var msecShow = document.getElementById("msec")
var secShow = document.getElementById("sec")
var minShow = document.getElementById("mins")
var interval;
function start(){
    var msecShow = document.getElementById("msec")
    msec++;
    msecShow.innerHTML = msec;
    if(msec>=99){
        var secShow = document.getElementById("sec")
        sec++;
        secShow.innerHTML = sec;
        msec = 00;

    }else if(sec>=60){
        var minShow = document.getElementById("mins")
        min++
        minShow.innerHTML=min;
        sec=0
      
    }
    var b = document.getElementById("startBut");
    b.disabled=true;
}


function start1(){
    
 interval=setInterval(start,10)

}


function pause(){
    clearInterval(interval)
    var b = document.getElementById("startBut");
    b.disabled = false;
}
function reset(){
    min = "00"
    sec = '00'
    msec = '00'
    minShow.innerHTML = min
    secShow.innerHTML =sec
    msecShow.innerHTML = msec
    clearInterval(interval)
    var b = document.getElementById("startBut");
    b.disabled = false;
}


function lap(){
    var lapp = document.getElementById("laps")
    lapp.innerHTML = min + " : "+ sec + " : " + msec
}

