import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { API_URL_RL } from 'src/app/constants/url';

@Injectable({
    providedIn:'root'
})
export class RestuarantService {
  private apiUrl = API_URL_RL + '/restaurant/fetchAllRestaurants';

  constructor(private http: HttpClient) {}
  getAllRestaurants(): Observable<any> {
    console.log('inside method');
    return this.http
      .get<any>(`${this.apiUrl}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    alert('error');
    console.error('An error occurred:', error);
    return throwError(error.message || error);
  }
}
