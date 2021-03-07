"use strict";
const area = document.querySelector('.area'),
      sector = document.querySelectorAll('.sector'),
      step = document.querySelector('.step'),
      stepNow = document.querySelector('.step__now'),
      box = document.querySelector('.win__block'),
      reloadGame = document.querySelector('.reload');
let x,
    counter = 0,
    player = "o",
    all = 0;
function doBlue(obj){
    obj.style.color = "rgba(49, 245, 219, 0.87)";
}
function handleClick(player, counter, target, stepNow, step){
    if(counter%2 === 1){
        player = "x";
        step.innerHTML = `Сейчас ходит:<span class="step__now">${"o"}</span>`;
    }else{
        player = "o";
        step.innerHTML = `Сейчас ходит:<span class="step__now">${"x"}</span>`;
    }
    target.innerHTML = player;
    target.removeEventListener("click", handleClick);
    win(sector, player, x, area, stepNow, step, box);
}
function win (sector, player, x, area, stepNow, step, box){
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
            box.innerHTML = `Выйграл: ${player}`;
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
    if(e.target.innerHTML == 'x' || e.target.innerHTML == "o"){
        return;
    }else{
        e.target.addEventListener('click', handleClick(player, counter, e.target, stepNow, step), [true]);
        counter = counter + 1;
        all = all + 1;
    }
    win(sector, player, x, area, stepNow, step, box);
    sector.forEach(unit =>{
        console.log(all);
        if((unit.innerHTML == 'x' || unit.innerHTML == 'o') && all >= 9){
            doBlue(unit);
            step.innerHTML = "";
            stepNow.innerHTML = "";
            box.innerHTML = `Ничья!`;
            win(sector, player, x, area, stepNow, step, box);
        }
    });
});
reloadGame.addEventListener('click', ()=>{
    window.location.reload();
})