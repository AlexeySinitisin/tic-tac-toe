"use strict";
const area = document.querySelector('.area'),
      sector = document.querySelectorAll('.sector'),
      step = document.querySelector('.step'),
      stepNow = document.querySelector('.step__now'),
      reloadGame = document.querySelector('.reload');
let x,
    counter = 0,
    player = "&#9675;";
function handleClick(player, counter, target, stepNow, step){
    if(counter%2 === 1){
        player = "&#215;"
        step.innerHTML = `Следующий ходит:<span class="step__now">${"&#9675;"}</span>`;
    }else{
        player = "&#9675;"
        step.innerHTML = `Следующий ходит:<span class="step__now">${"&#215;"}</span>`;
    }
    
    target.innerHTML = player;
    win(sector, player, x, area, stepNow, step);
    target.removeEventListener("click", handleClick);
}
function win (sector, player, x, area, stepNow, step){
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
        function doBlue(obj){
            obj.style.color = "rgba(49, 245, 219, 0.87)";
        }
        if(sector[item[0]].innerHTML == sector[item[1]].innerHTML && sector[item[1]].innerHTML == sector[item[2]].innerHTML && sector[item[0]].innerHTML != ""){
            box.innerHTML = player;
            doBlue(sector[item[0]]);
            doBlue(sector[item[1]]);
            doBlue(sector[item[2]]);
            doBlue(document.querySelector('.win'));
            area.removeEventListener('click', x);
            step.innerHTML = "";
            stepNow.innerHTML = "";
        }
    });
}
area.addEventListener('click', x = (e)=>{
    counter = counter + 1;
    e.target.addEventListener('click', handleClick(player, counter, e.target, stepNow, step))
});
reloadGame.addEventListener('click', ()=>{
    window.location.reload();
})