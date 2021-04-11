import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chart-render',
  templateUrl: './chart-render.component.html',
  styleUrls: ['./chart-render.component.scss'],
})
export class ChartRenderComponent {
  @Input() position: number;

  @Input() item: {
    title: string;
    imgSrc: string;
    youtubeLink: string;
  };

  constructor() {}
}
