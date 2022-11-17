import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'compound-int',
  templateUrl: './compound.component.html',
  styleUrls: ['./compound.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SimpleComponent {
  principal: number;
  interestRate: number;
  period: number;

  interestAmount: number;
  totalAmount: number;

  updatePrincipal(event) {
    this.principal = event.target.value;
  }

  updateInterestRate(event) {
    this.interestRate = event.target.value;
  }

  updatePeriod(event) {
    this.period = event.target.value;
  }

  calcuateInterest() {
    this.interestAmount =
      ((this.principal * this.interestRate) / 100) * this.period;
    this.totalAmount =
      this.principal * (1 + (this.interestRate / 100) * this.period);
  }
}
