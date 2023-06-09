import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  currencies: any[] = [];
  selectedCurrency1: any = '';
  selectedCurrency2: any = '';
  currencyValue1: number = 1;
  currencyValue2: number = 0;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.fetchCurrencies().subscribe((currencies: any[]) => {
      this.currencies = currencies;
      this.selectedCurrency1 = currencies[0];
      this.selectedCurrency2 = currencies[1];
      this.convertCurrency();

      console.log(this.selectedCurrency2.rate);
    });
  }

  convertCurrency(): void {
    if (
      this.currencyValue1 &&
      this.selectedCurrency1 &&
      this.selectedCurrency2
    ) {
      const result1 =
        (this.currencyValue1 * this.selectedCurrency1.rate) /
        this.selectedCurrency2.rate;
      this.currencyValue2 = result1;
    }

    if (
      this.currencyValue2 &&
      this.selectedCurrency1 &&
      this.selectedCurrency2
    ) {
      const result2 =
        (this.currencyValue2 * this.selectedCurrency2.rate) /
        this.selectedCurrency1.rate;
      this.currencyValue1 = result2;
    }
  }
}
