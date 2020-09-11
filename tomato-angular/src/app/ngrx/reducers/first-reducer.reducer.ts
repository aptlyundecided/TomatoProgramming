/*
TUTORIAL CODE

import { Action, createReducer, on } from '@ngrx/store';
import * as ScoreboardPageActions from '../actions/scoreboard-page.actions';

export interface State {
  home: number;
  away: number;
}

*/

import { Action } from '@ngrx/store'
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
