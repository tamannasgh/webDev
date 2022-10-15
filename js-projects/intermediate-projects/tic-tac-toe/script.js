const wins = [
    {cell1: 'X', cell2: 'X', cell3: 'X',},
    {cell1: '0', cell2: '0', cell3: '0',},

    {cell1: 'X', cell4: 'X', cell7: 'X',},
    {cell1: '0', cell4: '0', cell7: '0',},

    {cell1: 'X', cell5: 'X', cell9: 'X',},
    {cell1: '0', cell5: '0', cell9: '0',},

    {cell2: 'X', cell5: 'X', cell8: 'X',},
    {cell2: '0', cell5: '0', cell8: '0',},

    {cell3: 'X', cell6: 'X', cell9: 'X',},
    {cell3: '0', cell6: '0', cell9: '0',},

    {cell3: 'X', cell5: 'X', cell7: 'X',},
    {cell3: '0', cell5: '0', cell7: '0',},

    {cell4: 'X', cell5: 'X', cell6: 'X',},
    {cell4: '0', cell5: '0', cell6: '0',},

    {cell7: 'X', cell8: 'X', cell9: 'X',},
    {cell7: '0', cell8: '0', cell9: '0',},
];


function runAfterDom(callback, ...params){
    // console.log(callback, params);
    setTimeout( () => callback(...params), 150 );
}

// function test(a, b){
//     console.log(a + b);
// }

// function fun(){
//     runAfterDom(test, 2, 3);
// }

// love you javascript!!!!


// checking if players are 1 or 2 so that in case of 1 i can run bot and otherwise just..

let players = 1;

const popUp = document.querySelector(".pop-up");
document.addEventListener("mousemove", ask, {once: true} );

function ask(){
    const popUpMain = popUp.querySelector(".pop-up-main");

    popUp.style.display = "grid";
    
    setTimeout(() => {
        popUpMain.classList.add("active");
    }, 100);
}

document.querySelector(".pop-up .buttons").addEventListener("click", (e) => {
    if( e.target.classList.contains("alone") ){
        popUp.style.display = "none";
    }

    if( e.target.classList.contains("with-friend") ){
        players = 2;
        popUp.style.display = "none";
    }
});

// for checking no of players



// adding click listener in box

let clickCount = 0;

const box = document.querySelector(".box");

box.addEventListener("click", (e) => {
    if(players === 1){
        withBot(e);
    } else{
        withFriend(e);
    }
});


// game specific functions

function gameDone(){
    for(let i = 0 ; i < 9 ; i++){
        if( box.children[i].textContent === "" ){
            return false;
        }
    } return true;
}

function resetGame(){
    for(let i = 0 ; i < 9 ; i++){
        box.children[i].textContent = "";      
    }
    clickCount = 0;
    players = 1;
    
    setTimeout(ask, 0);
    
}

// result stuff

function getResult(){
    let caseNo = 0;
    
    for(let winCase of wins){
        let win = true;

        for( let [cellClass , value] of Object.entries(winCase) ){

            const cell = box.querySelector(`.${cellClass}`);

            if(!(cell.textContent === value)) {
                win = false;
                break;
            }
        }

        if(win){
            return {win: "win", withCase: wins[caseNo]};
        }

        caseNo++;
    }

    if(gameDone()){
        return {win: "draw"};
    }

    return {win: "lost"};
}

function showResultnReset(result){
   console.log(result);

   runAfterDom(resetGame);
}


// click
function click(cell){
    if(cell.textContent === "0" || cell.textContent === "X") return;
    cell.textContent = clickCount % 2 === 0 ? "0" : "X"; 
    clickCount++;   


    if(clickCount > 3){

        const result = getResult();

        if(gameDone()){
            runAfterDom(showResultnReset, result);
            return "gameDone";
        }
    
        if( result.win === "win" ){
            runAfterDom(showResultnReset, result);
            return "gameDone";
        }

        
    }


    return true;
}


// playing

function withBot(e){
    const cell = e.target;
    const clicked = click(cell);
    if(clicked === "gameDone"){
        return;
    }

    setTimeout(botClick, 300);
}

function botClick(){
    const randomNum = Math.floor( Math.random() * 9 ) + 1;
    const cell = box.querySelector(`.cell${randomNum}`);
    const clicked = click(cell);

    if(clicked) return;
    botClick();
}






















function withFriend(e){
    const cell = e.target;
    click(cell);

}






