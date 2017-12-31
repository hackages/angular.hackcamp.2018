import {Component, OnInit} from '@angular/core';
import {Book} from '../types/book';
import {AppService} from '../services/app.service';
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'bs-books',
  template:`
    <h2>My Library</h2>
    <div>
      <label>Book's title:</label> <input #bookTitle/>
      <button (click)="add()">
        Add
      </button>
    </div>
    <br>
    <hr/>
    <ul class="books">
      <li *ngFor="let book of books"
          [class.selected]="book === selectedBook"
          (click)="onSelect(book)">
        <span class="badge">{{book.id}}</span> {{book.title}}
        <button (class)="delete()"
                (click)="delete(book)">x
        </button>
      </li>
    </ul>
    <div *ngIf="selectedBook">
      <h2>
        {{book.title | uppercase}} is my favorite book
      </h2>
      <button (click)="gotoDetail(selectedBook.id)">View Details</button>
    </div>
  `,
  styleUrls: ['books.component.css']
})
export class BooksComponent implements OnInit {
  books: Observable<Book[]>;
  selectedBook: Book;

  constructor() {}

  ngOnInit(): void {}

  add(title: string): void {
    title = title.trim();
    if (!title) {
      return;
    }
    // Call the service here and use the result as your new book list.
  }

  delete(book: Book): void {
    // Delete the book, and use the result as your new book list.
  }

  onSelect(book: Book): void {
    this.selectedBook = book;
  }

  gotoDetail(id: number): void {
    // The Router service will help here
  }
}
