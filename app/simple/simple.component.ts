import { Component,ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'simple-int',
  templateUrl: './simple.component.html',
  styleUrls: [ './simple.component.css' ],
  encapsulation : ViewEncapsulation.None
})
export class SimpleComponent {

  principal:number;
  interestRate: number;
  period: number;
  month:number;
  prin:number;
  nint:number;
  i:number;

  interestAmount:number;
  totalAmount:number;

  updatePrincipal(event){
    this.principal = event.target.value;
  }

  updateInterestRate(event){
    this.interestRate = event.target.value;
  }

  updatePeriod(event){
    this.period = event.target.value;
  }

 

  /*
  month_number(){
   if(this.i<this.period){
     this.i++;
     return this.i;
  }
  }*/



  calcuateInterest(){
    
    this.interestAmount = ((this.principal * this.interestRate) / 100 ) ;
    this.totalAmount = this.principal * (1 + (this.interestRate/100 * 1));
   // this.principal=this.totalAmount;
   this.prin=this.totalAmount;
  }

  nextInterest(){
    this.nint = ((this.prin * this.interestRate) / 100 ) ;
    return this.nint;
  }

  newBalance(){
    this.totalAmount=this.prin+this.nint;
    this.prin=this.totalAmount;
    return this.totalAmount;
  }


}