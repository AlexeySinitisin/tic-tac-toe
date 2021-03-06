"use strict";
const area = document.querySelector('.area');
const sector = document.querySelectorAll('.sector');

function win (sector, player, click){
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
        if(sector[item[0]].innerHTML == sector[item[1]].innerHTML && sector[item[1]].innerHTML == sector[item[2]].innerHTML && sector[item[0]].innerHTML != ""){
            box.innerHTML = player;
            sector[item[0]].style.color = "red";
            sector[item[1]].style.color = "red";
            sector[item[2]].style.color = "red";
            document.querySelector('.win').style.color = "red";
            sector.forEach(item =>{
                item.removeEventListener("click", click);
            });
        }
    });
}
sector.forEach(item =>{
    let counter = 0;
    let player = "&#215;";
    area.addEventListener('click', ()=>{
        counter = counter + 1;
    });
    function click(e){
        const stepNow = document.querySelector('.step__now');
        stepNow.innerHTML = player;
        if(counter%2 === 1){
            player = "&#215;"
            stepNow.innerHTML = "&#9675;"; 
        }else{
            player = "&#9675;"
            stepNow.innerHTML = "&#215;";
        }
            item.innerHTML = player;
        win(sector, player);
        e.target.removeEventListener("click", click);
    }
    item.addEventListener('click', click);
});

