!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["minesweeperjs-solver"]=e():t["minesweeperjs-solver"]=e()}(global,(function(){return(()=>{"use strict";var t={142:(t,e,i)=>{i.r(e),i.d(e,{default:()=>n});const s=[{pattern:[[" "," "," "," "," "],["-","?","?","?"," "],["-","1","1"," "," "],["-","-","-"," "," "],["-","-","-","-"," "]],solution:[[" "," "," "," "," "],[" "," "," ","+"," "],[" "," "," ","+"," "],[" "," "," ","+"," "],[" "," "," "," "," "]]},{pattern:[[" ","?","?","?"," "],[" ","?","1","?"," "],[" ","-","1","-"," "],[" ","-","-","-"," "],[" "," "," "," "," "]],solution:[[" ","+","+","+"," "],[" "," "," "," "," "],[" "," "," "," "," "],[" "," "," "," "," "],[" "," "," "," "," "]]},{pattern:[["?","?","?"," "," "],["?","1","?"," "," "],[" ","?"," "," "," "],["-","1","-"," "," "],["-","-","-"," "," "]],solution:[["+","+","+"," "," "],["+"," ","+"," "," "],[" "," "," "," "," "],[" "," "," "," "," "],[" "," "," "," "," "]]},{pattern:[[" ","-","-","-"," "],[" ","?","1","-"," "],[" ","?","1","-"," "],[" ","?","1"," "," "],[" "," "," "," "," "]],solution:[[" "," "," "," "," "],[" "," "," "," "," "],[" "," "," "," "," "],[" ","+"," "," "," "],[" "," "," "," "," "]]},{pattern:[["?","?","?"],["1","2","1"],["-","-","-"]],solution:[["X","+","X"],[" "," "," "],[" "," "," "]]},{pattern:[["?","?","-"],["1","2","?"],["-","-","-"]],solution:[[" "," "," "],[" "," ","X"],[" "," "," "]]},{pattern:[["?","?","?"],["1","2","2"],["-","-","-"]],solution:[[" "," ","X"],[" "," "," "],[" "," "," "]]},{pattern:[[" "," "," ","-"," "],[" ","F","?","?","?"],[" ","-","2","1","?"],[" ","-","-","?","?"],[" "," "," "," "," "]],solution:[[" "," "," "," "," "],[" "," "," "," ","+"],[" "," "," "," ","+"],[" "," "," "," ","+"],[" "," "," "," "," "]]},{pattern:[[" "," "," ","-"," "],[" ","-","-","-","?"],[" ","F","2","1","?"],[" ","-","?","?","?"],[" "," "," "," "," "]],solution:[[" "," "," "," "," "],[" "," "," "," ","+"],[" "," "," "," ","+"],[" "," "," "," ","+"],[" "," "," "," "," "]]},{pattern:[[" ","-","-","-"," "],[" ","F","2","?"," "],[" ","-","2","?"," "],[" ","-","-","?"," "],[" "," "," "," "," "]],solution:[[" "," "," "," "," "],[" "," "," "," "," "],[" "," "," "," "," "],[" "," "," ","+"," "],[" "," "," "," "," "]]},{pattern:[[" ","F","-","-"," "],[" ","-","2","?"," "],[" ","-","2","?"," "],[" ","-","-","?"," "],[" "," "," "," "," "]],solution:[[" "," "," "," "," "],[" "," "," "," "," "],[" "," "," "," "," "],[" "," "," ","X"," "],[" "," "," "," "," "]]},{pattern:[[" ","-","F","-"," "],[" ","-","2","?"," "],[" ","-","2","?"," "],[" ","-","-","?"," "],[" "," "," "," "," "]],solution:[[" "," "," "," "," "],[" "," "," "," "," "],[" "," "," "," "," "],[" "," "," ","X"," "],[" "," "," "," "," "]]},{pattern:[[" ","-","-","F"," "],[" ","-","2","?"," "],[" ","-","2","?"," "],[" ","-","-","?"," "],[" "," "," "," "," "]],solution:[[" "," "," "," "," "],[" "," "," "," "," "],[" "," "," "," "," "],[" "," "," ","X"," "],[" "," "," "," "," "]]},{pattern:[[" ","-","-","-"," "],[" ","?","1","-"," "],[" ","?","2","-"," "],[" ","?","4","-"," "],[" ","?","F","F"," "]],solution:[[" "," "," "," "," "],[" "," "," "," "," "],[" "," "," "," "," "],[" ","X"," "," "," "],[" "," "," "," "," "]]},{pattern:[[" "," "," "," "," "],["?","?","?","?"," "],["F","2","2","-"," "],[" ","-","-","-"," "],[" "," "," "," "," "]],solution:[[" "," "," "," "," "],[" "," "," ","X"," "],[" "," "," "," "," "],[" "," "," "," "," "],[" "," "," "," "," "]]},{pattern:[["?","?","?"],["1","3","?"],["-","-","-"]],solution:[[" "," ","X"],[" "," ","X"],[" "," "," "]]},{pattern:[["?","?","?"],["3","3","2"],["-","F","-"]],solution:[["X"," "," "],[" "," "," "],[" "," "," "]]},{pattern:[[" "," "," "," "," "],[" ","-","-","-"," "],[" ","F","3","2","F"],[" ","F","?","?","?"],[" "," "," "," "," "]],solution:[[" "," "," "," "," "],[" "," "," "," "," "],[" "," "," "," "," "],[" "," "," "," ","+"],[" "," "," "," "," "]]},{pattern:[[" ","F","F","-"," "],[" ","-","3","?"," "],[" ","-","3","?"," "],[" ","F","F","?"," "],[" "," "," "," "," "]],solution:[[" "," "," "," "," "],[" "," "," "," "," "],[" "," "," "," "," "],[" "," "," ","+"," "],[" "," "," "," "," "]]},{pattern:[[" "," "," "," "," "],[" ","-","-","F"," "],[" ","F","3","3","F"],[" ","?","?","?","?"],[" "," "," "," "," "]],solution:[[" "," "," "," "," "],[" "," "," "," "," "],[" "," "," "," "," "],[" "," "," "," ","+"],[" "," "," "," "," "]]},{pattern:[[" "," "," "," "," "],[" ","F","-","-","F"],[" ","-","3","3","F"],[" ","?","?","?","?"],[" "," "," "," "," "]],solution:[[" "," "," "," "," "],[" "," "," "," "," "],[" "," "," "," "," "],[" ","X"," "," "," "],[" "," "," "," "," "]]},{pattern:[["?","-","?"],["?","4","?"],["?","2","-"]],solution:[["X"," ","X"],[" "," "," "],[" "," "," "]]},{pattern:[["-","2","?"],["F","4","?"],["-","?","?"]],solution:[[" "," "," "],[" "," "," "],[" ","X","X"]]},{pattern:[[" "," "," "," "," "],[" ","F","-","-"," "],[" ","F","5","2"," "],[" ","F","?","?","?"],[" "," "," "," "," "]],solution:[[" "," "," "," "," "],[" "," "," "," ","+"],[" "," "," "," ","+"],[" "," "," "," ","+"],[" "," "," "," "," "]]}];class l{constructor(){this.rules=s}rotate(t){let e=[];for(let i=0;i<t.length;i++){e[i]=[];for(let s=0;s<t[i].length;s++)e[i][s]=t[t.length-s-1][i]}return e}match(t,e){for(let i=0;i<t.length;i++)for(let s=0;s<t[i].length;s++)if(!this.compare(t[i][s],e[i][s]))return!1;return!0}compare(t,e){let i;switch(t){case"?":i=this.testUnknown(e);break;case"E":i=this.testOutOfBounds(e);break;case"F":i=this.testFlag(e);break;case" ":i=!0;break;default:i=t==e||this.testNumber(e)}return i}testUnknown(t){switch(t){case"?":case" ":return!0;default:return!1}}testOutOfBounds(t){switch(t){case"E":case"-":case" ":return!0;default:return!1}}testFlag(t){return"F"==t}testNumber(t){switch(t){case"-":case"E":case" ":return!0;default:return!1}}getRule(t){return-1===t||-2===t?null:this.rules[t]}}class r{constructor(t,e,i,s,l){this.x=t,this.y=e,this.message=i,this.canClick=[],this.canMine=[],this.ruleKey=s,this.rotation=l}determineAction(t){let e=Math.floor(t.length/2);for(let i=0;i<t.length;i++)for(let s=0;s<t[i].length;s++)switch(t[i][s]){case"X":this.canMine.push({x:this.x+s-e,y:this.y+i-e});break;case"+":this.canClick.push({x:this.x+s-e,y:this.y+i-e})}}allMine(t){for(let e=this.y-1;e<=this.y+1;e++)for(let i=this.x-1;i<=this.x+1;i++)e>=0&&e<t.length&&i>=0&&i<t[e].length&&t[e][i].getIsClickable()&&this.canMine.push({x:i,y:e})}allClick(t,e){for(let i=this.y-1;i<=this.y+1;i++)for(let s=this.x-1;s<=this.x+1;s++)i>=0&&i<t.length&&s>=0&&s<t[i].length&&(t[i][s]||e[i][s].getIsVisible()||this.canClick.push({x:s,y:i}))}}class n{constructor(t){this.newGame(t)}newGame(t){this.game=t,this.lastXScouted=-1,this.lastYScouted=-1,this.moves,this.flagVerified=Array(this.game.getLength()).fill(null).map((()=>Array(this.game.getWidth()).fill(!1))),this.rules=new l}getAllPlays(){const t=this.game.getLastPositionPlayed();if(this.lastXScouted===t.x&&this.lastYScouted===t.y)return!1;{let t;this.moves=[];let e=!1;do{e=!1;for(let i=0;i<this.game.getLength();i++)for(let s=0;s<this.game.getWidth();s++){let l=!0;if(t=this.getMove(s,i),null!=t){for(let e=0;e<this.moves.length;e++){let i=this.moves[e];i.x==t.x&&i.y==t.y&&i.ruleKey==t.ruleKey&&(l=!1)}l&&(this.moves.push(t),e=!0)}}}while(e)}return this.lastXScouted=t.x,this.lastYScouted=t.y,this.moves}getMove(t,e){let i=null;if(this.game.isEdge(t,e)){let s=this.getNeighboringFlagVerifiedCount(t,e),l=this.game.getNeighboringFlagCount(t,e);if(s===this.game.getCell(t,e).getValue()&&this.game.getNeighborCount(t,e)>s?(this.checkCorrectFlags(t,e),i=new r(t,e,"All neighboring mines flagged. Can click all unflagged neighbors.",-2,0),i.allClick(this.flagVerified,this.game.getBoard())):this.game.getCell(t,e).getValue()===this.game.getNeighborCount(t,e)&&this.game.getNeighborCount(t,e)>l?(i=new r(t,e,"All safe neighbors clicked. Can flag all remaining neighbors.",-1,0),i.allMine(this.game.getBoard())):i=this.patternMatching(t,e),null!=i)return this.addVerifiedFlags(i.canMine),i}return null}getNeighboringFlagVerifiedCount(t,e){let i=0;for(let s=Math.max(0,e-1);s<Math.min(e+2,this.game.getLength());s++)for(let l=Math.max(0,t-1);l<Math.min(t+2,this.game.getWidth());l++)s===e&&l===t||(i+=this.flagVerified[s][l]);return i}checkCorrectFlags(t,e){for(let i=Math.max(0,e-1);i<Math.min(e+2,this.game.getLength());i++)for(let e=Math.max(0,t-1);e<Math.min(t+2,this.game.getWidth());e++)this.game.getCell(e,i).getIsFlagged()&&!this.flagVerified[i][e]&&console.debug("Uncertain flag at: "+e+"|"+i)}addVerifiedFlags(t){for(let e=0;e<t.length;e++)this.flagVerified[t[e].y][t[e].x]=!0}getArea(t,e,i){let s=[],l=Math.floor(i/2);for(let i=e-l,r=0;i<=e+l;i++,r++){s[r]=[];for(let e=t-l,n=0;e<=t+l;e++,n++)i<0||i>this.game.getLength()-1||e<0||e>this.game.getWidth()-1?s[r][n]="E":!1===this.game.getCell(e,i).getIsVisible()?s[r][n]="?":!0===this.flagVerified[i][e]?s[r][n]="F":s[r][n]=this.game.getCell(e,i).getValue()}return s}patternMatching(t,e){let i=[],s=this.getArea(t,e,3),l=this.getArea(t,e,5);for(let n=0;n<this.rules.rules.length;n++){let a=this.rules.rules[n].pattern,o=this.rules.rules[n].solution,h=a[0].length;3==h?i=s:5==h&&(i=l);for(let s=0;s<4;s++){if(this.rules.match(i,a)){let i=new r(t,e,"Pattern Match",n,s);if(i.determineAction(o),!this.testIfAlreadyPerformed(i))return i}a=this.rules.rotate(a),o=this.rules.rotate(o)}}}testIfAlreadyPerformed(t){for(let e=0;e<t.canClick.length;e++)if(!this.game.getCell(t.canClick[e].x,t.canClick[e].y).getIsVisible())return!1;for(let e=0;e<t.canMine.length;e++)if(!this.game.getCell(t.canMine[e].x,t.canMine[e].y).getIsFlagged())return!1;return!0}}}},e={};function i(s){if(e[s])return e[s].exports;var l=e[s]={exports:{}};return t[s](l,l.exports,i),l.exports}return i.d=(t,e)=>{for(var s in e)i.o(e,s)&&!i.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i(142)})()}));