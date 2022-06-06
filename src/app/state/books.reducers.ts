/**
 * define a reducer function
 * to handle the retrieval of the book list
 * from the state and consequently, update the state
 * */

import { createReducer, on } from "@ngrx/store";
import { Book } from "../book-list/books.model";
import { retrievedBookList } from "./books.actions";

export const initialState: readonly Book[] = [];

export const booksReducer = createReducer(
  initialState,
  on(retrievedBookList, (state, { books }) => books)
);
