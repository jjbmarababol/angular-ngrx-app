import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Book } from '../book-list/books.model';

/**
 * Create the book list and collection selectors to ensure we get the correct information from the store.
 * As you can see, the selectBookCollection selector combines two other selectors in order to build its return value.
 */
export const selectBooks = createFeatureSelector<readonly Book[]>('books');
export const selectCollectionState =
  createFeatureSelector<readonly string[]>('collection');

export const selectBookCollection = createSelector(
  selectBooks,
  selectCollectionState,
  (books, collection) =>
    collection.map((id) => books.find((book) => book.id === id))
);
