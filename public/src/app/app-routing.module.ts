import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Homev2Component } from './homev2/homev2.component';
import { AboutComponent } from './about/about.component';
import { CodeComponent } from './code/code.component';

const routes: Routes = [
  { path: '', component: Homev2Component },
  { path: 'about', component: AboutComponent },
  { path: 'code', component: CodeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
