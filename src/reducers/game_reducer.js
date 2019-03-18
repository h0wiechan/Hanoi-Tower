import { SET_END_TOWER, MOVE_DISC_FROM, RESET_FOR_NEXT_MOVE, RESTART_GAME, ACTIVATE_GAME, INCREMENT_DISCS_NUM, DECREMENT_DISCS_NUM } from '../actions/game_actions';
import { createTowersArray } from '../util/game_util';
import { createArrayOfLength } from '../util/general_util';

const defaultDiscNum = 3;

const defaultState = {
  discsNum: defaultDiscNum,
  moves: 0,
  minMoves: Math.pow(2, defaultDiscNum) - 1,
  status: createTowersArray(defaultDiscNum),
  startTower: null,
  endTower: null,
  removedDisc: null,
  isActive: true,
}

const GameReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = JSON.parse(JSON.stringify(state));
  switch(action.type) {
    case SET_END_TOWER:
      newState.endTower = action.tower;
      return newState;
    case MOVE_DISC_FROM:
      // debugger
      let startTower = action.tower; 
      newState.startTower = startTower;
      if (newState.startTower === newState.endTower) return newState
      // newState.isActive = false;
      startTower = newState.status[startTower]; // Set the exact tower
      const disc = startTower.shift(); // Take out disc
      newState.removedDisc = disc; // Store disc'
      let endTower = newState.status[newState.endTower];
      // debugger
      if (typeof endTower[0] !== 'number' || newState.removedDisc < endTower[0]) {
        // debugger
        endTower.unshift(newState.removedDisc);
      } else {
        // debugger
        let startTower = newState.status[newState.startTower];
        startTower.unshift(newState.removedDisc);
      }
      // debugger
      newState.moves += 1;
      debugger
      return newState;
    case RESET_FOR_NEXT_MOVE:
      newState.removedDisc = null;
      newState.startTower = null;
      newState.endTower = null;
      return newState;
    case RESTART_GAME:
      newState.status = createTowersArray(newState.discsNum);
      newState.moves = 0;
      return newState;
    case ACTIVATE_GAME:
      newState.isActive = true;
      return newState;
    case INCREMENT_DISCS_NUM:
      if (newState.discsNum === 8) return newState;
      newState.discsNum += 1;
      newState.moves = 0;
      newState.minMoves = Math.pow(2, newState.discsNum) - 1;
      newState.status = [createArrayOfLength(newState.discsNum),[], []]
      return newState;
    case DECREMENT_DISCS_NUM:
      if (newState.discsNum === 3) return newState;
      newState.discsNum -= 1;
      newState.moves = 0;
      newState.minMoves = Math.pow(2, newState.discsNum) - 1;
      newState.status = [createArrayOfLength(newState.discsNum),[], []]
      return newState;
    default:
      return state;
  }
}

export default GameReducer;