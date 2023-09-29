import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CounterControlsComponent } from './counter-controls/counter-controls.component';
import { StoreModule } from '@ngrx/store';
import reducers from './store/store.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CountEffects } from './store/count/count.effects';

@NgModule({
  declarations: [
    AppComponent,
    CounterOutputComponent,
    CounterControlsComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([CountEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
