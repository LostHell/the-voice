import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VideoCardRenderComponent } from '../../components/video-card-render/video-card-render.component';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent {
  videos = [
    {
      title: 'Lumi b dhurata - Simpatia',
      videoId: 'uF-wQm0Pi9o',
    },
    {
      title: 'Rihanna - Ganja music',
      videoId: '1bdss2ufY7k',
    },
    {
      title: 'Poli Genova - Last Night',
      videoId: 'C5YNQCRPqR8',
    },
    {
      title: 'Rihanna - Ganja music',
      videoId: '1bdss2ufY7k',
    },
    {
      title:
        'BG Ethno House mixed by DJ DIAN SOLO (Episode 1) BG Ethno House mixed by DJ DIAN SOLO (Episode 1)',
      videoId: 'uF-wQm0Pi9o',
    },
    {
      title: 'BG Ethno House mixed by DJ DIAN SOLO (Episode 1)',
      videoId: '1bdss2ufY7k',
    },
    {
      title: 'BG Ethno House mixed by DJ DIAN SOLO (Episode 1)',
      videoId: 'C5YNQCRPqR8',
    },
    {
      title: 'BG Ethno House mixed by DJ DIAN SOLO (Episode 1)',
      videoId: '1bdss2ufY7k',
    },
    {
      title: 'BG Ethno House mixed by DJ DIAN SOLO (Episode 1)',
      videoId: 'C5YNQCRPqR8',
    },
  ];

  constructor(private dialog: MatDialog) {}

  videoCardRenderDialog(url) {
    let customMaxWidth = '';

    if (window.screen.availWidth <= 767) {
      console.log(window.screen.availWidth);
      customMaxWidth = '95vw';
    } else {
      customMaxWidth = '50vw';
    }

    const dialogRef = this.dialog.open(VideoCardRenderComponent, {
      width: '100%',
      maxWidth: customMaxWidth,
    });
    dialogRef.componentInstance.videoUrl = url;
  }
}
