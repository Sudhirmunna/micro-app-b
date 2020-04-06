import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LinkOneComponent } from './link-one/link-one.component';
import { LinkTwoComponent } from './link-two/link-two.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: 'dashboard/link1', component: LinkOneComponent },
  { path: 'dashboard/link2', component: LinkTwoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
