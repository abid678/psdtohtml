let number1 = document.querySelector("#svgTextcenter1");
cunter1 = 0;
setInterval(()=>{
    if(cunter1==90){
       clearInterval();
    }else{
        cunter1 += 1;
        number1.innerHTML=cunter1 + "%"
    }
},20)
let number2 = document.querySelector("#svgTextcenter2");
cunter2 = 0;
setInterval(()=>{
    if(cunter2==75){
       clearInterval();
    }else{
        cunter2 += 1;
        number2.innerHTML=cunter1 + "%"
    }
},20)
let number3 = document.querySelector("#svgTextcenter3");
cunter3 = 0;
setInterval(()=>{
    if(cunter3==70){
       clearInterval();
    }else{
        cunter3 += 1;
        number3.innerHTML=cunter1 + "%"
    }
},20)
let number4 = document.querySelector("#svgTextcenter4");
cunter4 = 0;
setInterval(()=>{
    if(cunter4==85){
       clearInterval();
    }else{
        cunter4 += 1;
        number4.innerHTML=cunter1 + "%"
    }
},20)
