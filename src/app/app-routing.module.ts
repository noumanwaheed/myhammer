import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {JobsComponent} from './jobs/jobs.component';
import {JobDetailsComponent} from './job-details/job-details.component';

const routes: Routes = [
  {path: '', component: JobsComponent},
  {path: 'job-details/:id', component: JobDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
