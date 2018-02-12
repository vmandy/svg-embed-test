import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogoComponent implements OnInit {

  public showA: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  public onButtonClick() {
    this.showA = !this.showA;
  }
}
