import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  news = [
    {
      src: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      href: 'uF-wQm0Pi9o',
      content:
        'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
    },
    {
      src: 'https://img.youtube.com/vi/uF-wQm0Pi9o/0.jpg',
      href: 'uF-wQm0Pi9o',
      content:
        'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
    },
    {
      src: 'https://img.youtube.com/vi/uF-wQm0Pi9o/0.jpg',
      href: '#',
      content:
        'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
    },
    {
      src: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      href: 'uF-wQm0Pi9o',
      content:
        'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
    },
    {
      src: 'https://img.youtube.com/vi/uF-wQm0Pi9o/0.jpg',
      href: 'uF-wQm0Pi9o',
      content:
        'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
    },
  ];

  item: {
    src;
    href;
    content;
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.item = this.news.find((x) => x.href === this.route.snapshot.params.id);
  }
}
