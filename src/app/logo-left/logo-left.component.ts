import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: '[app-logo-left]',
  templateUrl: './logo-left.component.html',
  styleUrls: ['./logo-left.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogoLeftComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
