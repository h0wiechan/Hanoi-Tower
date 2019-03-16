export const MOVE_DISC_FROM = 'MOVE_DISC_FROM';
export const SET_END_TOWER = 'SET_END_TOWER';
export const RESET_FOR_NEXT_MOVE = 'RESET_FOR_NEXT_MOVE';

export const moveDiscFrom = (tower) => ({
  type: MOVE_DISC_FROM,
})

export const resetForNextMove = () => ({
  type: RESET_FOR_NEXT_MOVE,
})

export const setEndTower = (tower) => ({
  type: SET_END_TOWER,
  tower
});
