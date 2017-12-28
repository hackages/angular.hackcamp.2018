import {Injectable} from '@angular/core';
import {Book} from '../types/book';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from "rxjs";

@Injectable()
export class AppService {
  bookApiUrl: string = 'app/books';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http:Http) {
  }

  getBooks(): Observable<Book[]> {
    
    return this.http.get(this.bookApiUrl)
      .map((res: Response)=> res.json().data as Book[]);
    
    //throw new Error('Oops. Not yet implemented...');
  }

  getBook(id: number): Observable<Book> {
    throw new Error('Oops. Not yet implemented...');
  }

  // Adds a new book and re-fetch the list of books.
  create(title: string): Observable<Book[]> {
    throw new Error('Oops. Not yet implemented...');
  }

  // Delete a book and re-fetch the list of books.
  delete(id: number): Observable<Book[]> {
    const url = `${this.bookApiUrl}/${id}`;
    throw new Error('Oops. Not yet implemented...');
  }

  // Update a book and re-fetch the list of books.
  update({id, title}): Observable<Book[]> {
    const url = `${this.bookApiUrl}/${id}`;
    throw new Error('Oops. Not yet implemented...');
  }
}
