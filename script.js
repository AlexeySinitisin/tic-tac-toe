"use strict";
const area = document.querySelector('.area');
const sector = document.querySelectorAll('.sector');
let x;
let counter = 0;
let player = "&#9675;";
function handleClick(player, counter, target){
    const stepNow = document.querySelector('.step__now');
    stepNow.innerHTML = player;
    if(counter%2 === 1){
        player = "&#215;"
        stepNow.innerHTML = "&#9675;"; 
    }else{
        player = "&#9675;"
        stepNow.innerHTML = "&#215;";
    }
    target.innerHTML = player;
    win(sector, player, x, area);
    target.removeEventListener("click", handleClick);
}
function win (sector, player, x, area){
    const box = document.querySelector('.win__block');
    const victory = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];
    victory.forEach(item =>{
        function doRed(obj){
            obj.style.color = "rgba(49, 245, 219, 0.87)";
        }
        if(sector[item[0]].innerHTML == sector[item[1]].innerHTML && sector[item[1]].innerHTML == sector[item[2]].innerHTML && sector[item[0]].innerHTML != ""){
            box.innerHTML = player;
            doRed(sector[item[0]]);
            doRed(sector[item[1]]);
            doRed(sector[item[2]]);
            doRed(document.querySelector('.win'));
            area.removeEventListener('click', x);
        }
    });
}
area.addEventListener('click', x = (e)=>{
    counter = counter + 1;
    e.target.addEventListener('click', handleClick(player, counter, e.target))
});