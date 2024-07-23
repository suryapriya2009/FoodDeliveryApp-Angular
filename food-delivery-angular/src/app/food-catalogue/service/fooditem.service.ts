import { Injectable } from "@angular/core";
import { API_URL_FC } from "src/app/constants/url";
import { HttpClient } from "@angular/common/http";
import { catchError, Observable ,throwError} from "rxjs";

@Injectable({
    providedIn:'root'
})

export class FoodItemService{
    private apiUrl = API_URL_FC + '/foodCatalogue/fetchRestAndFoodItemsByRestId/';
constructor(private http:HttpClient){}

foodItemsByRestaurant(id:number):Observable<any>{
    return this.http.get<any>(`${this.apiUrl+id}`)
    .pipe(
        catchError(this.handleError)
    );
}
private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(error.message || error);
  }

}