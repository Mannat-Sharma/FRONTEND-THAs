import {combineReducers} from 'redux';
import place from './place';
import placeData from './placeData';

const rootReducer = combineReducers({
    place: place,
    placeData: placeData,
})

export default rootReducer;