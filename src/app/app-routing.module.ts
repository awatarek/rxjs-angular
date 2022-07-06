import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstTaskComponent } from './components/first-task/first-task.component';
import { SecondTaskComponent } from './components/second-task/second-task.component';

const routes: Routes = [
  {path: "one", component: FirstTaskComponent},
  {path: "two", component: SecondTaskComponent},
  {path: "**", redirectTo: "one", pathMatch: "full"},
  {path:"", redirectTo: "one", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
