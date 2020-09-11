import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { FirstNgrxComponentComponent } from './panels/first-ngrx-component/first-ngrx-component.component'

const routes: Routes = [
  { path: '', component: FirstNgrxComponentComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
