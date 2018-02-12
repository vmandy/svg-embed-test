import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: '[app-logo-right]',
  templateUrl: './logo-right.component.html',
  styleUrls: ['./logo-right.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogoRightComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
