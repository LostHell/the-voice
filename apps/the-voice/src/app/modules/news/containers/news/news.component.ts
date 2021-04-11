import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent {
  news = [
    {
      newsId: 'uF-wQm0Pi9o',
      src: 'https://img.youtube.com/vi/1bdss2ufY7k/0.jpg',
      content:
        'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
    },
    {
      newsId: 'uF-wQm0Pi9o',
      src: 'https://img.youtube.com/vi/uF-wQm0Pi9o/0.jpg',
      content:
        'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
    },
    {
      newsId: '#',
      src: 'https://img.youtube.com/vi/uF-wQm0Pi9o/0.jpg',
      content:
        'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
    },
    {
      newsId: 'uF-wQm0Pi9o',
      src: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      content:
        'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
    },
    {
      newsId: 'uF-wQm0Pi9o',
      src: 'https://img.youtube.com/vi/uF-wQm0Pi9o/0.jpg',
      content:
        'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
    },
  ];

  constructor() {}
}
