import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  charts = [
    {
      rankingId: 'top-10',
      charts: [
        {
          title: 'Geri Nikol Geri Nikol Geri',
          imgSrc:
            'https://i1.actualno.com/actualno_2013/upload/news/2018/01/08/0112141001515415070_661969_600x458.webp',
          youtubeLink: 'https://www.youtube.com/watch?v=JH2LXtaSuro',
        },
        {
          title: 'Geri Nikol',
          imgSrc:
            'https://i1.actualno.com/actualno_2013/upload/news/2018/01/08/0112141001515415070_661969_600x458.webp',
          youtubeLink: 'https://www.youtube.com/watch?v=JH2LXtaSuro',
        },
      ],
    },
    {
      rankingId: 'airplay-chart',
      charts: [
        {
          title: 'Geri Nikol',
          imgSrc:
            'https://i1.actualno.com/actualno_2013/upload/news/2018/01/08/0112141001515415070_661969_600x458.webp',
          youtubeLink: 'https://www.youtube.com/watch?v=JH2LXtaSuro',
        },
      ],
    },
  ];

  item: {
    rankingId: string;
    charts: {
      title: string;
      imgSrc: string;
      youtubeLink: string;
    }[];
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.item = this.charts.find(
      (x) => x.rankingId === this.route.snapshot.params.id
    );
  }
}
