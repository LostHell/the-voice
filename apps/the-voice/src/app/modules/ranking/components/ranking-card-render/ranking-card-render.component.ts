import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ranking-card-render',
  templateUrl: './ranking-card-render.component.html',
  styleUrls: ['./ranking-card-render.component.scss'],
})
export class RankingCardRenderComponent {
  @Input() item: {
    rankingId: string;
    imgSrc: string;
  };

  constructor() {}
}
