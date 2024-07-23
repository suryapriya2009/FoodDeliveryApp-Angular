import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API_URL_Order } from "src/app/constants/url";
import { Observable,throwError } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class OrderService{
    private apiUrl = API_URL_Order + '/order/saveOrder'; 
    constructor(private http:HttpClient){}
    httpOptions={
        headers:new HttpHeaders({
            'Content-type':'text-plain',
            'Access-Control-Allow-Origin':'http://localhost:4200' // Replace with your Angular app URL
        })
    };
    saveOrder(data:any):Observable<any> {
        return this.http.post<any>(this.apiUrl,data);
    }
        
  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(error.message || error);
  }

 }