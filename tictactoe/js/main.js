// Team Members: Zahmir, Nyah, Vanessa, Josh, Eric, Finesse, Asaiah  //

//Also: Mark(mentor) Helped US


let botScore = 0,
  playerScore = 0;
let gridPick = []
const list = document.querySelectorAll(".grid");
list.forEach(gridBox => {
  console.log(gridBox);
  gridBox.addEventListener("click", (e) => {
    console.log("click:" + gridBox)
    gridBox.innerHTML = "x";
  })

})
console.log(list)


// .addEventListener("click", testFunction);
//
//  function testFunction (){
//    document.getElementsByClassName("grid").innerHTML = "x";
//  }



// document.getElementById("topSquareLeft").onclick= gridPick[0];
// document.getElementById("topSquareMid").onclick= gridPick[1];
// document.getElementById("topSquareRight").onclick= gridPick[2];
// document.getElementById("midSquareLeft").onclick= gridPick[3];
// document.getElementById("midSquareMid").onclick= gridPick[4];
// document.getElementById("midSquareRight").onclick= gridPick[5];
// document.getElementById("bottomSquareleft").onclick= gridPick[6];
// document.getElementById("bottomSquareMid").onclick= gridPick[7];
// document.getElementById("bottomSquareRight").onclick= gridPick[8];

/*


let player 1 = {
 name:'player1',
 win:0,
 weap:weap
}

let player 2 = {
 name:'player2',
 win: 0,
 weap: weap;
}





let game = {
  let array = [] /// create array to hold gameboard items

 playerturn:0;           // if player

  start():
    //Reset

  weapchoice():

  score():


  whoWon():
    // check array for matching x's or o'
        //compare array spots (0,1,2),(3,4,5),(6,7,8)
                              (0,3,6),(1,4,7),(2,5,8)
                              (0,4,8),(2,4,6)
      //if there's nowin
    // if the x's win with 3 in a row, player1 wins
    // if the o's win with 3 in a row, player2 wins


  updateboard (choice):
    //check whose turn
    //array push players choice on
    //check whoWon()












}



*/
