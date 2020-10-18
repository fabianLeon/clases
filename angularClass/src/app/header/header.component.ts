import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  template: `
    <p>
      header works!
    </p>
  `,
  styles: []
})

export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
