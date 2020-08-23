import {combineReducers} from 'redux'
import {ToggleReducer} from './toggle/toggleReducer'
import userReducer from './user/userReducer';
import learnReducer from './learnNumber/learnReducer';
import DisplayReducer from './displayScreen/screenReducer';

const rootReducer = combineReducers({
    hidden: ToggleReducer,
    user : userReducer,
    number: learnReducer,
    display: DisplayReducer
});

export default rootReducer; 