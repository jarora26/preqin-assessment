import { Routes } from '@angular/router';
import { InvestorsComponent } from './investors/investors.component';
import { CommitmentsComponent } from './commitments/commitments.component';

export const routes: Routes = [
  { path: '', component: InvestorsComponent },
  { path: 'commitments/:investorId', component: CommitmentsComponent },
];
