import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() currentUser: any;
  @Output() logout = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onLogout(): void {
    this.logout.emit();
  }

}
