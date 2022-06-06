/**
 * In the book-list folder, we want to have a service
 * that fetches the data needed for the book list from an API.
 * Create a file in the book-list folder named books.service.ts,
 * which will call the Google Books API and return a list of books.
 */

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Book } from "./books.model";

@Injectable({ providedIn: "root" })
export class GoogleBooksService {
  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http
      .get<{ items: Book[] }>(
        "https://www.googleapis.com/books/v1/volumes?maxResults=5&orderBy=relevance&q=oliver%20sacks"
      )
      .pipe(map((books) => books.items || []));
  }
}
