import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: '[app-logo-a]',
  templateUrl: './logo-a.component.html',
  styleUrls: ['./logo-a.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogoAComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
