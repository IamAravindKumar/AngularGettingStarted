import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/Operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productUrl = 'api/products/products.json';
  private currentTabstate = new BehaviorSubject<string>('home');
  pathName: Observable<string>;

  constructor(private http: HttpClient) {
    this.pathName = this.currentTabstate.asObservable();
  }

  updateCurrentTabstate(newPath: string): void{
    this.currentTabstate.next(newPath);
  }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getProduct(id: number): Observable<IProduct | undefined> {
    return this.getProducts().pipe(
      map((products: IProduct[]) => products.find(p => p.productId === id)),
      catchError(this.handleError)
    );
  }
  
  private handleError(err: HttpErrorResponse){
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Server returned Code: ${err.status}, error Message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

}