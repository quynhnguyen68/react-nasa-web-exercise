import * as Types from '../actions/types';
import { filter } from '../actions';

/**
 * @param {any} state
 * @param {{ type: any; filter: any; }} action
 */

 export default function (state = filter.SHOW_ALL, action) {
    switch(action.type) {
        case Types.SET_VISIBILITY_FILTER:
            return action.filter;
        default: return state;
    }
}