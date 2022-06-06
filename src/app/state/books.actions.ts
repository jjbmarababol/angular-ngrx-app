import { createAction, props } from '@ngrx/store';
import { Book } from '../book-list/books.model';

// Describe the book actions
// Book actions include the book list retrieval, and the add and remove book actions.
export const addBook = createAction(
  '[Book List] Add Book',
  props<{ bookId: string }>()
);

export const removeBook = createAction(
  '[Book List] Remove Book',
  props<{ bookId: string }>()
);

export const retrievedBookList = createAction(
  '[Book List] Add Book',
  props<{ books: readonly Book[] }>()
);
