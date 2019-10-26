const readline = require ("readline-sync")

class HumanPlayer {
  constructor(name,sym){
    this.name = name
    this.sym = sym
  }
  getMove() {
   return readline.question("Please enter your move?")
  }
}
module.exports = HumanPlayer