import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { DisplayProfileComponent} from './display-profile/display-profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'displayProf', component: DisplayProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, DisplayProfileComponent];
