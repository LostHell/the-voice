import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  @Output() sidenavClose = new EventEmitter();

  @Input() navigation = [];

  constructor() {}

  onSidenavClose(event) {
    this.sidenavClose.emit();
  }
}
