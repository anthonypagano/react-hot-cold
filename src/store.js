import {createHotColdGame} from 'redux';

import {hotColdGameReducer} from './reducers';

export default createStore(hotColdGameReducer);
