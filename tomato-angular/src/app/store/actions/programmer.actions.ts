import { createAction } from '@ngrx/store';
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
/*]
[|]
[*/
export const ProgrammerActions = {
  FrustrationClick,
  SipCoffee,
  Reset
}
/*]
[E] END
[*/
