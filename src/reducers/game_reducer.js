import { MOVE_DISC_FROM, SET_END_TOWER, RESET_FOR_NEXT_MOVE } from '../actions/game_actions';
import { createTowersArray } from '../util/game_util';

const defaultDiscNum = 3;

const defaultState = {
  discsNum: defaultDiscNum,
  moves: 0,
  minMoves: 255,
  status: createTowersArray(defaultDiscNum),
  startTower: null,
  endTower: null,
  removedDisc: null,
}

const GameReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = JSON.parse(JSON.stringify(state));
  switch(action.type) {
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
      return newState;
    case RESET_FOR_NEXT_MOVE:
      newState.removedDisc = null;
      newState.startTower = null;
      newState.endTower = null;
      return newState;
    case SET_END_TOWER:
      newState.endTower = action.tower;
      return newState;
    default:
      return state;
  }
}

export default GameReducer;