import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  data: any;
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.fetchCurrencies().subscribe((response) => {
      this.data = response;
    });
  }
}
