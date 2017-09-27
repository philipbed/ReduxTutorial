export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const VisibilityFilters = {
  SHOW_ALL : 'SHOW_ALL',
  SHOW_COMPLETED : 'SHOW_COMPLETED',
  SHOW_ACTIVE : 'SHOW_ACTIVE',
};
/*
  Action functions that are sent to the store that produce some new state to
  be returned by a corresponding reducer.
 */
export function addTodo(text){
    return {type: ADD_TODO,text} ;
}

export function toggleTodo(text){
  return {type: TOGGLE_TODO,text};
}

export function setVisibilityFilter(filter){
  return {type: SET_VISIBILITY_FILTER, filter }
}
