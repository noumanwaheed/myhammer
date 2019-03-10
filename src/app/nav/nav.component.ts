import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  appTitle = '<i class="fas fa-hammer text-warning"></i> MyHammer';
  navItems = [
    {
      title: 'Jobs',
      href: '/',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
