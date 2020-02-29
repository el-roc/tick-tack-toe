// let board = ["", "", "", "", "", "", "", "", ""]
// let e = 0
// let gameBoard.canPlay = true;

class Board{
  constructor(){
    this.board = ["", "", "", "", "", "", "", "", ""]
    this.turn = 0
    this.canPlay = true
  }
  display(message){
    document.querySelector(`.winMessage`).innerHTML = message
  }
  reset(){
    // document.querySelectorAll(".grid").innerHTML = " "


      document.querySelector('#topSquareLeft').innerHTML = ""
      document.querySelector('#topSquareMid').innerHTML = ""
      document.querySelector('#topSquareRight').innerHTML = ""
      document.querySelector('#midSquareLeft').innerHTML = ""
      document.querySelector('#midSquareMid').innerHTML = ""
      document.querySelector('#midSquareRight').innerHTML = ""
      document.querySelector('#bottomSquareleft').innerHTML = ""
      document.querySelector('#bottomSquareMid').innerHTML = ""
      document.querySelector('#bottomSquareRight').innerHTML = ""
      gameBoard.board = ["", "", "", "", "", "", "", "", ""]
      document.querySelector('#topSquareLeft').classList.remove("noClick")
      document.querySelector('#topSquareMid').classList.remove("noClick")
      document.querySelector('#topSquareRight').classList.remove("noClick")
      document.querySelector('#midSquareLeft').classList.remove("noClick")
      document.querySelector('#midSquareMid').classList.remove("noClick")
      document.querySelector('#midSquareRight').classList.remove("noClick")
      document.querySelector('#bottomSquareleft').classList.remove("noClick")
      document.querySelector('#bottomSquareMid').classList.remove("noClick")
      document.querySelector('#bottomSquareRight').classList.remove("noClick")
      gameBoard.canPlay = true
      // document.querySelector('winMessage').innerHTML = ""
      gameBoard.display(" ")
  }
}
  const gameBoard = new Board()

class Player{
  constructor(name, weapon, score){
  this.name = name;
  this.weapon = weapon;
  this.score = 0

}
  countScore(score){
    score = score + 1
    this.score = score
    console.log(`${score}`);
    if ( gameBoard.turn % 2 === 0){

        document.querySelector("#PlayerOne").innerHTML = score

    }else{
        document.querySelector("#PlayerTwo").innerHTML = score

    }
  }
}
  const p1 = new Player("Player One Wins", "x")
  const p2 = new Player("Player Two Wins", "o")




const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]

];

document.querySelector("#resetButton").addEventListener("click", function(e){
  gameBoard.reset()
})

document.querySelectorAll('.grid').forEach (item => {
    item.addEventListener('click', event => {
        if(!gameBoard.canPlay){ return; }
        let eventId = event.target.getAttribute('id')
        let eventValue = event.target.getAttribute('value')
        event.target.classList.add('noClick')
        // console.log(eventId)
        // console.log(eventValue);

        //if (e === 0 ){

            // console.log(document.querySelector(`.`+ eventId))
            //document.querySelector(`#`+ eventId).innerHTML = p1.weapon


      //  }

        if ( gameBoard.turn % 2 === 0){
            // console.log(document.querySelector(`.`+ eventId))

            document.querySelector(`#`+ eventId ).innerHTML = p1.weapon
            gameBoard.board[eventValue] = p1.weapon
            compareValues()
        }else{
            // console.log(document.querySelector(`.`+ eventId))

            document.querySelector(`#`+ eventId).innerHTML = p2.weapon
            gameBoard.board[eventValue] = p2.weapon
            compareValues()
        }
           gameBoard.turn++

        if (gameBoard.turn === 9){
          // console.log("Game Over");
          document.querySelector("game").innerHTML = "Game Over"
            // alert ('Game Over')
        }

        function compareValues(){
          let winRound = false
          for(let i = 0; i <= 7; i++) {
            const winCondition = winningConditions[i];
            let firstCellValue = gameBoard.board[winCondition[0]];
            let secondCellValue = gameBoard.board[winCondition[1]];
            let thirdCellValue = gameBoard.board[winCondition[2]];
            // console.log(firstCellValue, secondCellValue, thirdCellValue);
            if (firstCellValue === '' || secondCellValue === '' || thirdCellValue === '') {
              // console.log('no match')
              continue;

            // console.log('no match')
        }
          if (firstCellValue === secondCellValue && secondCellValue === thirdCellValue) {
            //winRound = true;
            console.log("its a match")
            if ( gameBoard.turn % 2 === 0){
                // console.log(document.querySelector(`.`+ eventId))

                gameBoard.display(`${p1.name}`)
                // document.querySelector(".winMessage").innerHTML = p1.name
                // document.querySelector("PlayerOne").innerHTML = p1.score(p1.score)
                p1.countScore(p1.score)
                // document.querySelectorAll(".grid").innerHTML = event.target.classList.add('noClick')

            }else{
                // console.log(document.querySelector(`.`+ eventId))
                gameBoard.display(`${p2.name}`)
                // document.querySelector(".winMessage").innerHTML = p2.name
                p2.countScore(p2.score)
            }

            gameBoard.canPlay = false;
            //document.querySelectorAll(".grid").style.['pointerEvents']= 'none'

        }



        }
        }
        // console.log(gameBoard.board);
        //  console.log(gameBoard.turn)

    })

})
