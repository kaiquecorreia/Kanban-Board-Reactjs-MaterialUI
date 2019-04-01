// Combina os reducers da aplicação
import { combineReducers } from 'redux';

import board from './board';

export default combineReducers({ board });
