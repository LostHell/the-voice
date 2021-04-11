import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RankingComponent } from './containers/ranking/ranking.component';
import { ChartComponent } from './containers/chart/chart.component';

const routes: Routes = [
  { path: '', component: RankingComponent, pathMatch: 'full' },
  { path: ':id', component: ChartComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RankingRoutingModule {}
