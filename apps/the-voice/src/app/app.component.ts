import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  navigation = [];

  ngOnInit(): void {
    this.navigation = [
      { name: 'News', route: '/news' },
      { name: 'Ranking', route: '/rankings' },
      { name: 'Video', route: '/videos' },
      { name: 'Program', route: '/programs' },
      { name: 'Stars', route: '/stars' },
    ];
  }

  onActivate(event) {
    window.scroll(0, 0);
  }
}
