let hrs=document.getElementById('hrs');
let min=document.getElementById('min');
let sec=document.getElementById('sec');


setInterval(()=>{
    let current_time = new Date();


hrs.innerHTML=( current_time.getHours() < 10 ? '0' : '') + current_time.getHours();
min.innerHTML=( current_time.getMinutes() < 10 ? '0' : '')+current_time.getMinutes();
sec.innerHTML=( current_time.getSeconds() < 10 ? '0' : '')+current_time.getSeconds();
},1000);
