import { createReducer, on } from '@ngrx/store';
import { increment } from './counter.actions';

const initialState = 0;
export const counterReducer = createReducer(
  initialState,
  on(increment, (state, action) => state + action.value)
);
// other way write reducer
// export function countReducer(state = initialState) {
//   return state;
// }
