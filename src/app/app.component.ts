import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { GoogleBooksService } from "./book-list/books.service";
import { addBook, removeBook, retrievedBookList } from "./state/books.actions";
import { selectBookCollection, selectBooks } from "./state/books.selector";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  constructor(private store: Store, private bookService: GoogleBooksService) {}

  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectBookCollection);

  onRemove(bookId: string) {
    this.store.dispatch(removeBook({ bookId }));
  }

  onAdd(bookId: string) {
    this.store.dispatch(addBook({ bookId }));
  }

  //calls the getBooks from book service then the will dispatch a retrievedBookList action where we pass the retrieved books list to the store
  ngOnInit() {
    this.bookService
      .getBooks()
      .subscribe((books) => this.store.dispatch(retrievedBookList({ books })));
  }
}

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
