import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { Store, select } from '@ngrx/store'
import { PROGRAMMER } from 'src/app/store/types/programmer'
import {
  selectProgrammerCoffeeSips,
  selectProgrammerFrustratedClicks,
  selectProgrammerEnergyLevel
} from '../../store/selectors/programmer.selectors'
import { ProgrammerActions} from '../../store/actions/programmer.actions'


@Component({
  selector: 'app-first-ngrx-component',
  templateUrl: './first-ngrx-component.component.html',
  styleUrls: ['./first-ngrx-component.component.sass']
})
export class FirstNgrxComponentComponent implements OnInit {

  programmerCoffeeSips$: Observable<number>
  programmerFrusratedClicks$: Observable<number>
  programmerEnergyLevel$: Observable<number>
  /*]
  [|]
  [*/
  click_count_input: number = 0
  /*]
  [|]
  [*/
  constructor(private store: Store<{programmer: PROGRAMMER}>) {
    this.programmerCoffeeSips$ = store.select(selectProgrammerCoffeeSips)
    this.programmerFrusratedClicks$ = this.store.select(selectProgrammerFrustratedClicks)
    this.programmerEnergyLevel$ = this.store.select(selectProgrammerEnergyLevel)
  }
  /*]
  [|]
  [*/
  ngOnInit(): void {
  }
  /*]
  [|] --------------------------------------------------------- ||
  [|]        CLICK HANDLERS
  [|] --------------------------------------------------------- ||
  [*/
  sipCoffee () {
    this.store.dispatch({ type: '[PROGRAMMER] SIP_COFFEE'})
  }
  /*]
  [|]
  [*/
  frustrationClick () {
    this.store.dispatch({ type: '[PROGRAMMER] FRUSTRATION_CLICK'})
  }
  /*]
  [|]
  [*/
  update_clickcount_input (num: string) {
    this.click_count_input = parseInt(num)
  }
  /*]
  [|]
  [*/
  setClickCount () {
    this.store.dispatch(ProgrammerActions.SetClickCount({newClickCount: this.click_count_input}))
  }
}
