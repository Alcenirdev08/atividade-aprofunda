import { Book } from '../../domain/book';
import { BookRepository } from './bookRepository';

export class InMemoryBookRepository implements BookRepository {
    private books: Book[] = [];

    async addBook(book: Book): Promise<Book> {
        this.books.push(book);
        return book;
    }

    async listBooks(): Promise<Book[]> {
        return this.books;}
}