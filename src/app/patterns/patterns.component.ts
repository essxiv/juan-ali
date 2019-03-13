import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patterns',
  templateUrl: './patterns.component.html',
  styleUrls: ['./patterns.component.scss']
})
export class PatternsComponent {

  numbers: Array<number> = [];
  start: number;
  end: number;
  
  constructor() {
    this.start = 1;
    this.end = 100;
    this.numbers = Array(this.end - this.start + 1).fill(0).map((item, index) => this.start + index);
  }

  isBoth(num) {
    if (num % 3 === 0 && num % 5 === 0) {
      return true;
    }
    return false;
  }

}


