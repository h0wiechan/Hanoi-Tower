import { SET_END_TOWER, MOVE_DISC_FROM, RESET_FOR_NEXT_MOVE, INCREMENT_DISCS_NUM, DECREMENT_DISCS_NUM } from '../actions/game_actions';
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
}

const GameReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = JSON.parse(JSON.stringify(state));
  switch(action.type) {
    case SET_END_TOWER:
      newState.endTower = action.tower;
      return newState;
    case MOVE_DISC_FROM:
      let startTower = action.tower; 
      newState.startTower = startTower;
      startTower = newState.status[startTower]; // Set the exact tower
      const disc = startTower.shift(); // Take out disc
      newState.removedDisc = disc; // Store disc'
      let endTower = newState.status[newState.endTower];
      if (typeof endTower[0] !== 'number' || newState.removedDisc < endTower[0]) {
        endTower.unshift(newState.removedDisc);
      } else {
        let startTower = newState.status[newState.startTower];
        startTower.unshift(newState.removedDisc);
      }
      newState.moves += 1;
      return newState;
    case RESET_FOR_NEXT_MOVE:
      newState.removedDisc = null;
      newState.startTower = null;
      newState.endTower = null;
      return newState;
    case INCREMENT_DISCS_NUM:
      if (newState.discsNum === 8) return newState;
      newState.discsNum += 1;
      newState.minMoves = Math.pow(2, newState.discsNum) - 1;
      newState.status = [createArrayOfLength(newState.discsNum),[], []]
      newState.removedDisc = null;
      newState.startTower = null;
      newState.endTower = null;
      return newState;
    case DECREMENT_DISCS_NUM:
      if (newState.discsNum === 3) return newState;
      newState.discsNum -= 1;
      newState.minMoves = Math.pow(2, newState.discsNum) - 1;
      newState.status = [createArrayOfLength(newState.discsNum),[], []]
      newState.removedDisc = null;
      newState.startTower = null;
      newState.endTower = null;
      return newState;
    default:
      return state;
  }
}

export default GameReducer;