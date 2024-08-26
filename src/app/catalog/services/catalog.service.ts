import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { Item } from "../model/catalog.model";
const apiUrl = 'https://5d0e3cd1eba6ef0014561072.mockapi.io/articles';
@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor() { }

  getItems(): Observable<Item[]> {
    return of()
  }
}
