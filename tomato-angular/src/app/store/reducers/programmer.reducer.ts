/*]
|| ----------------------------------------------------------- ||
    MY FIRST REDUCER
    ----------------------------------------------------------
    OK so it's not truly my first reducer, but it's the first
    time I am really going to take my time and TRULY
    try to understand everything that's happening in here.
    ----------------------------------------------------------
    Born On:    11.September.2020
    Author:     Alex Wilson
|| ----------------------------------------------------------- ||
[*/
import { Action, createReducer, on} from '@ngrx/store'
import { ProgrammerActions } from '../actions/programmer.actions'
import { PROGRAMMER } from '../types/programmer'
/*]
[|]
[*/
const initialState: PROGRAMMER = {
  frustrated_clicks: 0,
  coffee_sips: 0,
  glasses_adjustments: 0,
  energy_meter: 0,
  random_numbers: []
}
/*]
[|] NOTE:
[|] Rather than using a switch case like redux, this thing seems to have it's own
[|] built-in handling???  Looks like I need some pre-made actions.
[|]
[|] NOTE:
[|] Yeah I like this better than redux.  Way more organized, and I think I could even import a
[|] a separate function here to handle the state update.
[*/
const programmerReducer = createReducer(
  initialState,
  on(ProgrammerActions.SipCoffee, state => ({...state, coffee_sips: state.coffee_sips + 1, energy_meter: state.energy_meter + 5})),
  on(ProgrammerActions.FrustrationClick, state => ({...state, frustrated_clicks: state.frustrated_clicks + 1, energy_meter: state.energy_meter - 5})),
  on(ProgrammerActions.Reset, state => ({frustrated_clicks: 0, coffee_sips: 0, glasses_adjustments: 0, energy_meter: 0, random_numbers: []}))
)
/*]
[|]
[*/
export function ProgrammerReducer(state: PROGRAMMER | undefined, action: Action) {
  return programmerReducer(state, action)
}
/*]
[E] END
[*/
