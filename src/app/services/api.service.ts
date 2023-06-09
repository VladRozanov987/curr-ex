import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl =
    'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

  constructor(private http: HttpClient) {}

  fetchCurrencies(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}`);
  }
}
