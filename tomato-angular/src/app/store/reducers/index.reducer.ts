import { ActionReducerMap } from '@ngrx/store'
/*]
[|] Reducers
[*/
import { ProgrammerReducer } from '../reducers/programmer.reducer'
/*]
[|] Types
[*/
import { PROGRAMMER } from '../types/programmer'


interface AppState {
  programmer: PROGRAMMER
}
/*]
[|] Map all reducers into ... one?
[*/
export const reducers: ActionReducerMap<AppState> = {
  programmer: ProgrammerReducer
}

/*]
[|]
[*/
