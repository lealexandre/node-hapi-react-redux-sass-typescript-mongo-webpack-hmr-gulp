/// <reference path="../../../../../../typings/index.d.ts" />
import { Reducer, combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';

/* ******************************* */
/* *********** GLOBALS *********** */

// Example in Global
import { onExampleReducer, onNavBarReducer } from '../../../reducers';
/* ****************************** */
/* *********** LOCALS *********** */

// Account Form
import accounts from './accounts';
import * as userDetails from '../components/UserDetails/reducers';
import * as userSearch from '../components/UserSearch/reducers';
import * as adminSearch from '../components/AdminSearch/reducers';
import * as adminGroupSearch from '../components/AdminGroupSearch/reducers';
import * as adminGroupDetails from '../components/AdminGroupDetails/reducers';
import * as adminDetails from '../components/AdminDetails/reducers';
import * as statusSearch from '../components/StatusSearch/reducers';
import * as statusDetails from '../components/StatusDetails/reducers';
import * as accountDetails from '../components/AccountDetails/reducers';
import * as accountSearch from '../components/AccountSearch/reducers';

export const rootReducer: Reducer = combineReducers({
    form: formReducer,
    onNavBarReducer,
    [accountSearch.REDUCER_NAME]: accountSearch.reducer,
    [accountDetails.REDUCER_NAME]: accountDetails.reducer,
    [userDetails.REDUCER_NAME]: userDetails.reducer,
    [userSearch.REDUCER_NAME]: userSearch.reducer,
    [adminSearch.REDUCER_NAME]: adminSearch.reducer,
    [adminGroupSearch.REDUCER_NAME]: adminGroupSearch.reducer,
    [adminGroupDetails.REDUCER_NAME]: adminGroupDetails.reducer,
    [adminDetails.REDUCER_NAME]: adminDetails.reducer,
    [statusSearch.REDUCER_NAME]: statusSearch.reducer,
    [statusDetails.REDUCER_NAME]: statusDetails.reducer
});

