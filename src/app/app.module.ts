import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { StoreModule } from "@ngrx/store";
import { AppComponent } from "./app.component";
import { BookCollectionComponent } from "./book-collection/book-collection.component";
import { BookListComponent } from "./book-list/book-list.component";
import { counterReducer } from "./counter.reducer";
import { MyCounterComponent } from "./my-counter/my-counter.component";
import { booksReducer } from "./state/books.reducers";
import { collectionReducer } from "./state/collection.reducer";

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({
      books: booksReducer,
      collection: collectionReducer,
    }),
  ],
  declarations: [
    AppComponent,
    MyCounterComponent,
    BookCollectionComponent,
    BookListComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
