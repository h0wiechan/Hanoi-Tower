export const MOVE_DISC_FROM = 'MOVE_DISC_FROM';
export const SET_END_TOWER = 'SET_END_TOWER';
export const RESET_FOR_NEXT_MOVE = 'RESET_FOR_NEXT_MOVE';

export const INCREMENT_DISCS_NUM = 'INCREMENT_DISCS_NUM';
export const DECREMENT_DISCS_NUM = 'DECREMENT_DISCS_NUM';
// Game Logics

export const setEndTower = (tower) => ({
  type: SET_END_TOWER,
  tower
});

export const moveDiscFrom = (tower) => ({
  type: MOVE_DISC_FROM,
})

export const resetForNextMove = () => ({
  type: RESET_FOR_NEXT_MOVE,
})

// Game Settings

export const incrementDiscsNum = () => ({
  type: INCREMENT_DISCS_NUM,
})

export const decrementDiscsNum = () => ({
  type: DECREMENT_DISCS_NUM,
})