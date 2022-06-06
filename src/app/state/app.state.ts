import { Book } from '../book-list/books.model';

export interface AppState {
  count: number;
  books: readonly Book[];
  collection: readonly string[];
}
