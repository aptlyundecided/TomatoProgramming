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
/*]
[|] TODO|AW: Define what this is really doing.
[*/
export interface State {
  clicks: number,
  coffee_sips: number,
  random_numbers: Array<number>
}
/*]
[|]
[*/
const initialState: State = {
  clicks: 0,
  coffee_sips: 0,
  random_numbers: []
}
/*]
[|] NOTE:
[|] Rather than using a switch case like redux, this thing seems to have it's own
[|] built-in handling???  Looks like I need some pre-made actions.
[*/
const scoreboardReducer = createReducer(
  initialState,
  // on(ScoreboardPageActions.homeScore, state => ({ ...state, home: state.home + 1 })),
  // on(ScoreboardPageActions.awayScore, state => ({ ...state, away: state.away + 1 })),
  // on(ScoreboardPageActions.resetScore, state => ({ home: 0, away: 0 })),
  // on(ScoreboardPageActions.setScores, (state, { game }) => ({ home: game.home, away: game.away }))
)
/*]
[|]
[*/
export function reducer(state: State | undefined, action: Action) {
  return scoreboardReducer(state, action)
}
/*]
[E] END
[*/
