import { createSelector } from '@ngrx/store'
import { PROGRAMMER } from '../types/programmer'
/*]
[|]
[*/
export const selectProgrammer = createSelector(
  state => state['programmer'],
  (programmer) => programmer
)
// export const selectProgrammerCoffeeSips = (state: AppState) => state.programmer.coffee_sips
/*]
[|]
[*/
export const selectProgrammerCoffeeSips = createSelector(
  selectProgrammer,
  (state: PROGRAMMER) => state.coffee_sips
)
// ------ []
export const selectProgrammerFrustratedClicks = createSelector(
  selectProgrammer,
  (state: PROGRAMMER) => state.frustrated_clicks
)
// ------ []
export const selectProgrammerEnergyLevel = createSelector(
  selectProgrammer,
  (state: PROGRAMMER) => state.energy_meter
)
// ------ []

/*]
[E] END
[*/
