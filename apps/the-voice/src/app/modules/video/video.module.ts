import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoRoutingModule } from './video-routing.module';
import { VideoComponent } from './containers/video/video.component';
import { VideoCardRenderComponent } from './components/video-card-render/video-card-render.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [VideoComponent, VideoCardRenderComponent],
  imports: [CommonModule, VideoRoutingModule, MaterialModule],
})
export class VideoModule {}
