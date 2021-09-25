import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {appComponents, d2RoutedComponents} from './components';
import {bonesDirectives} from './directives';

@NgModule({
  declarations: [
    AppComponent,
    ...appComponents,
    ...d2RoutedComponents,
    ...bonesDirectives
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
