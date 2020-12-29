import rules from "./config/rules";
/*
 * Class representing rules to help solve the game
 *
 */
export default class Rules
{
  constructor() {
    this.rules = rules;
  }

  /**
   * Rotates a pattern array 90 degrees
   * (Minesweeper has rotational symmetry)
   * @param {Array} pattern
   */
  rotate(pattern) {
    let newPattern = [];
    for(let i=0; i<pattern.length; i++) {
      newPattern[i] = [];
      for (let j=0; j<pattern[i].length; j++) {
        newPattern[i][j] = pattern[pattern.length-j-1][i];
      }
    }
    return newPattern;
  }

  /**
   * Checks if the board matches the pattern from a rule
   * @param {Array} inputPattern the pattern from the board
   * @param {Array} testPattern the pattern given by the rule
   */
  match(inputPattern, testPattern) {
    for (let i=0; i<inputPattern.length; i++) {
      for (let j=0; j<inputPattern[i].length; j++) {
        if (!(this.compare(inputPattern[i][j], testPattern[i][j])))
          return false;
      }
    }
    return true;
  }

  /**
   * Compares a cell's value/type to the pattern symbol at the space
   * by directing to the test function that sees if this is considered
   * a match
   * @param {String} input
   * @param {String} patternSymbol
   */
  compare(input, patternSymbol) {
    let result;
    switch (input) {
      case "?":
        result = this.testUnknown(patternSymbol);
        break;
      case "E":
        result = this.testOutOfBounds(patternSymbol);
        break;
      case "F":
        result = this.testFlag(patternSymbol);
        break;
      case " ":
        result = true;
        break;
      default:
        if (input==patternSymbol)
          result = true;
        else
          result = this.testNumber(patternSymbol);

    }

    return result;
  }

  /**
   * What symbols in a pattern a space that is unrevealed matches
   * @param {String} patternSymbol
   */
  testUnknown(patternSymbol) {
    switch (patternSymbol) {
      case "?":
        return true;
      case " ":
        return true;
      default:
        return false;
    }
  }

  /**
   * What symbols in a pattern a space outside the board matches
   * @param {String} patternSymbol
   */
  testOutOfBounds(patternSymbol) {
    switch (patternSymbol) {
      case "E":
        return true;
      case "-":
        return true;
      case " ":
        return true;
      default:
        return false;
    }
  }

  /**
   * What symbols in a pattern a flagged space matches
   * @param {String} patternSymbol
   */
  testFlag(patternSymbol) {
    if (patternSymbol=="F")
      return true;
    else
      return false;
  }

  /**
   * What symbols in a pattern a normal, numbered space matches
   * @param {String} patternSymbol
   */
  testNumber(patternSymbol) {
    switch (patternSymbol) {
      case "-":
        return true;
      case "E":
        return true;
      case " ":
        return true;
      default:
        return false;
    }
  }

  /**
   * Gets the rule by the index given
   * @param {Number} ruleKey
   */
  getRule(ruleKey) {
    // key -1 and -2 are reserved for all mine and all click rules
    if(ruleKey===-1 || ruleKey===-2) {
      return null;
    } else {
      return this.rules[ruleKey];
    }
  }
}
