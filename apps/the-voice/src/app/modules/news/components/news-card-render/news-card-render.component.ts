import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-news-card-render',
  templateUrl: './news-card-render.component.html',
  styleUrls: ['./news-card-render.component.scss'],
})
export class NewsCardRenderComponent {
  @Input() item: {
    newsId: string;
    src: string;
    content: string;
  };

  @Input() isForRead: boolean;

  constructor() {}
}
