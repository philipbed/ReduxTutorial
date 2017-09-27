import {combineReducers} from 'redux';
import {ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters} from './actions';

const {SHOW_ALL} = VisibilityFilters;

/**
 * Creates a reducer object consisting of the other defined reducers
 */
const todoApp = combineReducers({
    visibilityFilter,
    todos,
});

/**
 * Component reducer that returns the new state of the todos
 * array property depending on the action type
 * @param state - the todos array property of the state
 * @param action - the action object that contains the action type and any new/updated property it contains
 *  in this case the todo text.
 * @returns an array of todos or an empty array
 */
function todos(state = [], action){

    switch (action.type){
        case ADD_TODO:
            return [
                ...state,
                {
                    text:action.text,
                    completed:false,
                }
            ];
        case TOGGLE_TODO:
            return state.map((todo,index) => {
               if (index == action.index){
                   return Object.assign({},todo, {
                       completed: !todo.completed,
                   })
               }
            });
        default:
            return state;
    }

}
/**
 * Visisbility component reducer that returns the new state of the visibility
 * filter property depending on the action filter
 * @param state - the visibility filter
 * @param action - the action containing the action which in this case would be to
 * set the visibility filter, and the filter to set it to.
 * @returns returns a visibility filter
 */
function visibilityFilter(state = SHOW_ALL, action){
    switch(action.type){
        case SET_VISIBILITY_FILTER:
            return action.filer;
        default:
            return state;
    }
}

export default todoApp;
