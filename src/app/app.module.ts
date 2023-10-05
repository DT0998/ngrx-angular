import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CounterControlsComponent } from './counter-controls/counter-controls.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromApp from './app/store/store.reducer';
import { CountEffects } from './store/count/count.effects';

@NgModule({
  declarations: [
    AppComponent,
    CounterOutputComponent,
    CounterControlsComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([CountEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
