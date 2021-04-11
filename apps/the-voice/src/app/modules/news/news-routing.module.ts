import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './containers/news/news.component';
import { DetailsComponent } from './containers/details/details.component';

const routes: Routes = [
  { path: '', component: NewsComponent, pathMatch: 'full' },
  { path: ':id', component: DetailsComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsRoutingModule {}
