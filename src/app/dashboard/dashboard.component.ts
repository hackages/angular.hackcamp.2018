import {Component, OnInit} from '@angular/core';
import {Book} from '../types/book';
import {AppService} from '../services/app.service';
import {Observable} from 'rxjs/Observable'
import { BooksComponent } from '../books/books.component';

@Component({
  styleUrls: ['dashboard.component.css'],
  selector: 'bs-dashboard',
  templateUrl: 'dashboard.template.html'
})
export class DashboardComponent implements OnInit {

  books$: Observable<Book[]>;

  books: Book[] = [];

  constructor(private bookService: AppService) {
  }

  ngOnInit(): void {
    // Get all the books

    this.books$ = this.bookService.getBooks();

    //this.books$.do(console.log).subscribe((books) =>this.books = books);

    
  }
}
