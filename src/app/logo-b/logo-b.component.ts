import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: '[app-logo-b]',
  templateUrl: './logo-b.component.html',
  styleUrls: ['./logo-b.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogoBComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
