
var  player1name = prompt('What is player 1 name')
var  player2name = prompt('What is player 2 name')
var  player1Name = document.querySelector('#player1Name').innerHTML = player1name
var  player2Name = document.querySelector('#player2Name').innerHTML = player2name
var  player1turn = true
var  winnerScore = 15;


const rollDice = document.querySelector('#rollDice');
const diceimage = document.querySelector('img');

let currentscore = 0;
let totalscoreplayer1 = 0;
let totalscoreplayer2 = 0;
 


const player1CurrentScoreUI = document.querySelector('#player1CurrentScoreUI')
const player2CurrentScoreUI = document.querySelector('#player2CurrentScoreUI')

const player1TotalScoreUI = document.querySelector('#player1TotalScoreUI')
const player2TotalScoreUI = document.querySelector('#player2TotalScoreUI')


const player1Area = document.querySelector('#player1')
const player2Area = document.querySelector('#player2')

    player1Area.classList.add('active')



rollDice.addEventListener('click', function(){
    const RandomNumberGenerate = Math.ceil(Math.random()*6)
    console.log(RandomNumberGenerate)
    diceimage.src = `./Assist/${RandomNumberGenerate}.png`

    if(RandomNumberGenerate === 1){
        currentscore =0 

        if(player1turn){
    player1CurrentScoreUI.textContent = currentscore
            player1turn = false

        }else{
            
            player2CurrentScoreUI.textContent = currentscore
            player1turn = true
        }



    player1CurrentScoreUI.textContent = currentscore
        // player1turn = false
    player1Area.classList.toggle('active')
    player2Area.classList.toggle('active')

    
    return    }
    
    currentscore += RandomNumberGenerate
    if(player1turn){
        player1CurrentScoreUI.textContent = currentscore
    }else{   
             player2CurrentScoreUI.textContent = currentscore

    }
})


const holdDice = document.querySelector('#holdDice')

holdDice.addEventListener('click', function(){
    
    if(player1turn){
        totalscoreplayer1 += currentscore;
        player1TotalScoreUI.textContent = totalscoreplayer1;
        
        if(totalscoreplayer1 >= winnerScore){
            alert(`${player1name} is winner`)
            return
        }


        currentscore = 0;
        player1CurrentScoreUI.textContent =0;
        player1turn = false;   


    }else{
        totalscoreplayer2 += currentscore;
        player2TotalScoreUI.textContent = totalscoreplayer2;
       
        currentscore = 0;
        player2CurrentScoreUI.textContent =0;
        player2turn = false;   
        player1turn = true

          if(totalscoreplayer2 >= winnerScore){
      
      alert(`${player2name} is winner`)
      
      return
      
  }



    }

    player1Area.classList.toggle('active')
    player2Area.classList.toggle('active')

})



const ResetGame = document.querySelector('#resetGame')

ResetGame.addEventListener('click', function(){


player1name = prompt('What is player 1 name')
player2name = prompt('What is player 2 name')
player1Name = document.querySelector('#player1Name').textContent = player1name
player2Name = document.querySelector('#player2Name').textContent = player2name
player1turn = true
winnerScore = 15;


let currentscore = 0;
let totalscoreplayer1 = 0;
let totalscoreplayer2 = 0;
    player1TotalScoreUI.textContent = 0;
    player2TotalScoreUI.textContent = 0;
 
        player1CurrentScoreUI.textContent = 0;
        player2CurrentScoreUI.textContent = 0;



})


