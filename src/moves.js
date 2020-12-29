/**
 * Class representing available moves
 */
export default class Move
{
  constructor(x, y, message, ruleKey, rotation) {
    this.x = x;
    this.y = y;
    this.message = message;
    this.canClick = [];
    this.canMine = [];
    this.ruleKey = ruleKey;
    this.rotation = rotation;
  }

  /**
   * Determines what clicks can be on the board from a solution template
   * @param {Array} solution template of the clicks that can be made around this space
   */
  determineAction(solution) {
    let radius = Math.floor(solution.length/2);
    for (let i=0; i<solution.length; i++) {
      for (let j=0; j<solution[i].length; j++) {
        switch (solution[i][j]) {
          case "X":
            this.canMine.push({x: this.x+j-radius, y: this.y+i-radius});
            break;
          case "+":
            this.canClick.push({x:this.x+j-radius, y: this.y+i-radius});
            break;
        }
      }
    }
  }

  /**
   * Indicates that all unrevealed spaces around can be mined
   * @param {Array} board the array of minesweeper cells
   */
  allMine(board) {
    for (let i=this.y-1; i<=this.y+1; i++) {
      for (let j=this.x-1; j<=this.x+1; j++) {
        if (i>=0 && i<board.length && j>=0 && j<board[i].length) {
          if (board[i][j].getIsClickable())
            this.canMine.push({x:j, y:i});
        }
      }
    }
  }

  /**
   * Indicates that all unrevealed spaces around can be clicked
   * @param {Array} flag the array of verified flags
   * @param {Array} board the array of minesweeper cells
   */
  allClick(flag, board) {
    for (let i=this.y-1; i<=this.y+1; i++) {
      for (let j=this.x-1; j<=this.x+1; j++) {
        if (i>=0 && i<flag.length && j>=0 && j<flag[i].length) {
          if (!flag[i][j] && !board[i][j].getIsVisible()) {
            this.canClick.push({x:j, y:i});
          }
        }
      }
    }
  }
}
