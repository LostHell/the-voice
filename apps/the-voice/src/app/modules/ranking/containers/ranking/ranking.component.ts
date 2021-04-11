import { Component } from '@angular/core';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss'],
})
export class RankingComponent {
  rankings = [
    {
      rankingId: 'top-10',
      imgSrc: './assets/images/bg%20voice%20top%2010.png',
    },
    {
      rankingId: 'airplay-chart',
      imgSrc: './assets/images/airplay%20chart.jpg',
    },
    { rankingId: 'top-10', imgSrc: './assets/images/dance%20top%2030.jpg' },
    { rankingId: '#', imgSrc: './assets/images/bg%20voice%20top%2010.png' },
    {
      rankingId: 'airplay-chart',
      imgSrc: './assets/images/dance%20top%2030.jpg',
    },
    { rankingId: '#', imgSrc: './assets/images/the%20voice%20top%2010.jpg' },
  ];

  constructor() {}
}
