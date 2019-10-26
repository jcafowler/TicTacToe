const HumanPlayer = require("./HumanPlayer.js")
const Board = require ("./Board.js")
class Game {
  constructor(player1,player2) {
    this.player1 = player1
    this.player2 = player2
    this.currentPlayer = player1
    this.board = new Board()
  }
  switchPlayers() {
    if (this.currentPlayer === this.player1){
      this.currentPlayer = this.player2
    } else {
      this.currentPlayer = this.player1
    }
  }
  gameOver() {
    this.board.findWinner()
    return this.board.winner
  }
  
  play() {
    while(!this.gameOver()){
      console.clear()
      this.board.displayBoard()
      let move = false
      while(!this.board.isValidMove(move)){
          move = this.currentPlayer.getMove()
      }
      this.board.placeMark(this.currentPlayer.sym,move)
      this.switchPlayers()
    }
    console.clear()
    this.board.displayBoard()
    if (this.board.winner === this.player1.sym) {
      console.log(this.player1.name + " wins!!! ")
    } else if (this.board.winner === this.player2.sym) {
      console.log(this.player2.name + " wins !!!")
    } else {
      console.log("TIE GAME!!! YOU BOTH ARE LOSERS!!!!")
    }
}
}
let game = new Game(new HumanPlayer("Jay","X"), new HumanPlayer("Mojo", "O"))

game.play()

