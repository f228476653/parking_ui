import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RevenueAnalysisComponent } from './revenue-analysis.component';

const routes: Routes = [
  {
    path: '', component: RevenueAnalysisComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RevenueAnalysisRoutingModule { }
