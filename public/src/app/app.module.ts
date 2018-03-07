import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material.module';
import { Homev2Component } from './homev2/homev2.component';
import { AboutComponent } from './about/about.component';
import { CodeComponent } from './code/code.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Homev2Component,
    AboutComponent,
    CodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterializeModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
