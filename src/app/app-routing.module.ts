import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BmiComponent } from './components/bmi/bmi.component';
import { ResultComponent } from './components/result/result.component';

const routes: Routes = [
  { path: '',
    redirectTo: '/bmi',
    pathMatch: 'full'
  },
  { path: 'bmi', component: BmiComponent },
  { path: 'result', component: ResultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
