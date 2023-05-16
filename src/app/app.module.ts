import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PercentagePipe } from './percentage.pipe';
import { GreenTextDirective } from './green-text.directive';

@NgModule({
  declarations: [
    AppComponent,
    PercentagePipe,
    GreenTextDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
