import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './containers/home/home.component';
import { HeadingSectionComponent } from './components/heading-section/heading-section.component';
import { NewsSectionComponent } from './components/news-section/news-section.component';
import { RankingSectionComponent } from './components/ranking-section/ranking-section.component';
import { VideoSectionComponent } from './components/video-section/video-section.component';
import { ProgramSectionComponent } from './components/program-section/program-section.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeadingSectionComponent,
    NewsSectionComponent,
    RankingSectionComponent,
    VideoSectionComponent,
    ProgramSectionComponent,
  ],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
