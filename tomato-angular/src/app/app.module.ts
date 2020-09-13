import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'


// [NgRx]
import { StoreModule } from '@ngrx/store'
import { reducers } from './store/reducers/index.reducer'
// import { FirstReducer } from './ngrx/reducers/first-reducer.reducer'
// import { selectProgrammerCoffeeSips } from './ngrx/selectors/first-selector.selector';
import { FirstNgrxComponentComponent } from './panels/first-ngrx-component/first-ngrx-component.component'
import { environment } from 'src/environments/environment'

@NgModule({
  declarations: [
    AppComponent,
    FirstNgrxComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      programmer: reducers.programmer
    }, {}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
