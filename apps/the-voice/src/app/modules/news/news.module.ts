import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsRoutingModule } from './news-routing.module';

import { NewsComponent } from './containers/news/news.component';
import { NewsCardRenderComponent } from './components/news-card-render/news-card-render.component';
import { MaterialModule } from '../material/material.module';
import { DetailsComponent } from './containers/details/details.component';

@NgModule({
  declarations: [NewsComponent, NewsCardRenderComponent, DetailsComponent],
  imports: [CommonModule, NewsRoutingModule, MaterialModule],
})
export class NewsModule {}
