import { createAction, props } from '@ngrx/store';
/*]
[|]
[*/
const ACTION_TITLE = '[PROGRAMMER]'
/*]
[|]
[*/
const SipCoffee = createAction(
  `${ACTION_TITLE} SIP_COFFEE`
)
// ------[]
const FrustrationClick = createAction(
  `${ACTION_TITLE} FRUSTRATION_CLICK`
)
// ------[]
const Reset = createAction(
  `${ACTION_TITLE} RESET`
)
// ------ []
const SetClickCount = createAction(
  `${ACTION_TITLE} SET CLICK COUNT`,
  props<{newClickCount: number}>()
)
/*]
[|]
[*/
export const ProgrammerActions = {
  FrustrationClick,
  SipCoffee,
  Reset,
  SetClickCount
}
/*]
[E] END
[*/
