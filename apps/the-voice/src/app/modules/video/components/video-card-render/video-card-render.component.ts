import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-card-render',
  templateUrl: './video-card-render.component.html',
  styleUrls: ['./video-card-render.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class VideoCardRenderComponent implements OnInit {
  @Input() videoUrl: string;

  urlSafe: SafeResourceUrl;

  embedUrl: string;

  constructor(public sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.embedUrl = `https://www.youtube.com/embed/${this.videoUrl}`;
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.embedUrl);
  }
}
