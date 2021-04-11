import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RankingRoutingModule } from './ranking-routing.module';

import { RankingComponent } from './containers/ranking/ranking.component';
import { RankingCardRenderComponent } from './components/ranking-card-render/ranking-card-render.component';
import { ChartComponent } from './containers/chart/chart.component';
import { ChartRenderComponent } from './components/chart-render/chart-render.component';

@NgModule({
  declarations: [
    RankingComponent,
    RankingCardRenderComponent,
    ChartComponent,
    ChartRenderComponent,
  ],
  imports: [CommonModule, RankingRoutingModule],
})
export class RankingModule {}
