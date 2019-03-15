export const MOVE_DISC_FROM = 'MOVE_DISC_FROM';
export const REMOVE_DISC = 'REMOVE_DISC';
export const MOVE_DISC = 'MOVE_DISC';
export const SET_END_TOWER = 'SET_END_TOWER';
export const RESET_DISCS = 'RESET_DISCS';
export const RESET_FOR_NEXT_MOVE = 'RESET_FOR_NEXT_MOVE';

export const moveDiscFrom = (tower) => ({
  type: MOVE_DISC_FROM,
  tower
})

export const removeDisc = (disc) => ({
  type: REMOVE_DISC,
  disc
});

export const resetForNextMove = () => ({
  type: RESET_FOR_NEXT_MOVE,
})

export const moveDisc = () => ({
  type: MOVE_DISC,
})

export const setEndTower = (tower) => ({
  type: SET_END_TOWER,
  tower
});
