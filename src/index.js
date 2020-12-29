import Rules from "./rules";
import Move from "./moves";

/**
 * Attempts to solve a minesweeper game
 */
export default class Solver
{
  constructor(game) {
    this.newGame(game);
  }

  /**
   * Initializes the solver for a new game
   * @param {Number} game
   */
  newGame(game) {
    this.game = game;
    this.lastXScouted = -1;
    this.lastYScouted = -1;
    this.moves;
    this.flagVerified = Array(this.game.getLength()).fill(null).map(()=>Array(this.game.getWidth()).fill(false));
    this.rules = new Rules();
  }

  /**
   * Finds all known moves for the current board state
   */
  getAllPlays() {
    const lastPositionPlayed = this.game.getLastPositionPlayed();
    // if already scouted, don't recompute
    if(this.lastXScouted===lastPositionPlayed.x && this.lastYScouted===lastPositionPlayed.y) {
      return false;
    } else {
      this.moves = [];
      let tempMove;
      let newMove = false;
      // loop across board until it doesn't find any more moves
      do {
        newMove = false;
        for(let i=0; i<this.game.getLength(); i++) {
          for(let j=0; j<this.game.getWidth(); j++) {
            let doAdd = true;
            tempMove = this.getMove(j, i);
            if (tempMove!=null) {
              //Test for uniqueness
              for(let k=0; k<this.moves.length; k++) {
                let iteratedMove = this.moves[k];
                if(iteratedMove.x==tempMove.x && iteratedMove.y==tempMove.y && iteratedMove.ruleKey==tempMove.ruleKey) {
                  doAdd = false;
                }
              }
              if (doAdd) {
                this.moves.push(tempMove);
                newMove = true;
              }
            }
          }
        }
      } while (newMove);
    }

    this.lastXScouted = lastPositionPlayed.x;
    this.lastYScouted = lastPositionPlayed.y;
    return this.moves;
  }

  /**
   * Tries to find a move for the given cell
   * @param {Number} x
   * @param {Number} y
   */
  getMove(x, y) {
    let move = null;
    if (this.game.isEdge(x, y)) {
      let flagCountVerified = this.getNeighboringFlagVerifiedCount(x, y);
      let flagCount =  this.game.getNeighboringFlagCount(x, y);
      // if number of flags equals the value in the cell, and has unrevealed neighbors -> can click all
      if (flagCountVerified===this.game.getCell(x, y).getValue() && this.game.getNeighborCount(x, y) > flagCountVerified) {
        this.checkCorrectFlags(x, y);
        move = new Move(x, y, "All neighboring mines flagged. Can click all unflagged neighbors.", -2, 0);
        move.allClick(this.flagVerified, this.game.getBoard());
      // if number of unrevealed neighbors equals the value of the cell, and has unflagged neighors -> can mine all
      } else if (this.game.getCell(x, y).getValue()===this.game.getNeighborCount(x, y) && this.game.getNeighborCount(x, y)>flagCount) {
        move = new Move(x, y, "All safe neighbors clicked. Can flag all remaining neighbors.", -1, 0);
        move.allMine(this.game.getBoard());
      // else try to pattern match
      } else {
        move = this.patternMatching(x, y);
      }
      if (move!=null) {
        this.addVerifiedFlags(move.canMine);
        return move;
      }
    }
    return null;
  }

  /**
   * Counts the number of flags in neighboring cells
   *
   * @param {Number} x The column clicked
   * @param {Number} y The row clicked
   */
  getNeighboringFlagVerifiedCount(x, y) {
    let sum = 0;
    for(let i=Math.max(0, y-1); i<Math.min(y+2, this.game.getLength()); i++) {
      for(let j=Math.max(0, x-1); j<Math.min(x+2, this.game.getWidth()); j++) {
        if(!(i===y && j===x)) {
          sum += this.flagVerified[i][j];
        }
      }
    }
    return sum;
  }

  /**
   * Checks if the solver agrees with flags around a space
   * @param {Number} x
   * @param {Number} y
   */
  checkCorrectFlags(x, y) {
    for(let i=Math.max(0, y-1); i<Math.min(y+2, this.game.getLength()); i++) {
      for(let j=Math.max(0, x-1); j<Math.min(x+2, this.game.getWidth()); j++) {
        if (this.game.getCell(j, i).getIsFlagged() && !this.flagVerified[i][j])
          console.debug("Uncertain flag at: " + j + "|" + i);
      }
    }
  }

  /**
   * Adds the list of positions to the verified flag array
   * @param {Array} canMine {x,y} position
   */
  addVerifiedFlags(canMine) {
    for(let i=0; i<canMine.length; i++) {
      this.flagVerified[canMine[i].y][canMine[i].x] = true;
    }
  }

  /**
   * Gets the area around a cell on the game board
   * @param {Number} x
   * @param {Number} y
   * @param {Number} length
   */
  getArea(x, y, length) {
    let area = [];
    let radius = Math.floor(length/2);
    for (let i=y-radius, r=0; i<=y+radius; i++, r++) {
      area[r] = [];
      for (let j=x-radius, s=0; j<=x+radius; j++, s++) {
        if (i<0 || i>this.game.getLength()-1 || j<0 || j>this.game.getWidth()-1)
          area[r][s] = "E";
        else if (this.game.getCell(j, i).getIsVisible()===false)
          area[r][s] = "?";
        else if (this.flagVerified[i][j]===true)
          area[r][s] = "F";
        else
          area[r][s] = this.game.getCell(j, i).getValue();
      }
    }
    return area;
  }

  /**
   * Attempts to find a pattern that matches the board at the position
   * and what moves can be made if so
   * @param {Number} x
   * @param {Number} y
   */
  patternMatching(x, y) {
    let inputPattern = [];
    // fetchs the board state for a diameter of 3 and 5 around the space
    let inputPattern3 = this.getArea(x, y, 3);
    let inputPattern5 = this.getArea(x, y, 5);
    for (let i=0; i<this.rules.rules.length; i++) {
      let testPattern = this.rules.rules[i].pattern;
      let moveIfCorrect = this.rules.rules[i].solution;
      let size = testPattern[0].length;

      if (size==3)
        inputPattern = inputPattern3;
      else if (size==5)
        inputPattern = inputPattern5;
      // iterates over different rotations of the pattern for matching
      for (let j=0; j<4; j++) {
        // does this pattern match
        if (this.rules.match(inputPattern, testPattern)) {
          let move = new Move(x, y, "Pattern Match", i, j);
          // computes what moves can be made using this pattern
          move.determineAction(moveIfCorrect);
          // checks if those moves haven't already been made
          if (!this.testIfAlreadyPerformed(move)) {
            return move;
          }
        }
        // rotate pattern for next iteration
        testPattern = this.rules.rotate(testPattern);
        moveIfCorrect = this.rules.rotate(moveIfCorrect);
      }
    }
  }

  /**
   * Checks if clicks inidicated by the move have already happened
   * @param {Move} move
   */
  testIfAlreadyPerformed(move) {
    // are the click not yet revealed
    for(let i=0; i<move.canClick.length; i++) {
      if(!(this.game.getCell(move.canClick[i].x, move.canClick[i].y).getIsVisible()))
        return false;
    }

    // are the flags not already flagged
    for(let i=0; i<move.canMine.length; i++) {
      if(!(this.game.getCell(move.canMine[i].x, move.canMine[i].y).getIsFlagged()))
        return false;
    }

    return true;
  }
}
