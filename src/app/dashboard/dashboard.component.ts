import { Component, OnInit } from "@angular/core";
import { Book } from "../types/book";
import { AppService } from "../services/app.service";
import { Observable } from "rxjs/Observable";
import { BooksComponent } from "../books/books.component";

@Component({
  styleUrls: ["dashboard.component.css"],
  selector: "bs-dashboard",
  template: `
    <h3>All Books</h3>
    <bs-book-search></bs-book-search>
    <br>
    <hr/>
    <div class="grid grid-pad">
      <a *ngFor="let book of books$ | async"
        [routerLink]="['/detail', book.id]"
        class="col-1-4">
        <div class="module hero">
          <h4>{{book.title}}</h4>
        </div>
      </a>
    </div>
  `
})
export class DashboardComponent implements OnInit {
  books$: Observable<Book[]>;

  constructor(private bookService: AppService) {}

  ngOnInit(): void {
    // Get all the books
    this.books$ = this.bookService.getBooks();
  }
}
