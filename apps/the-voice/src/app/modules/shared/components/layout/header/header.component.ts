import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() public sidenavToggle = new EventEmitter();

  @Output() public sidenavClose = new EventEmitter();

  @Input() navigation = [];

  constructor() {}

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  onCloseSidenav() {
    this.sidenavClose.emit();
  }
}
