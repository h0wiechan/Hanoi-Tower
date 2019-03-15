import { combineReducers } from 'redux';
import game from './game_reducer';

const RootReducer = combineReducers({
    game
});

export default RootReducer;