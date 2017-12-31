import {Component, OnInit} from '@angular/core';
import {Router}            from '@angular/router';
import {Observable}        from 'rxjs/Observable';
import {Subject}           from 'rxjs/Subject';
import {SearchService} from '../services/search.service';
import {Book} from '../types/book';

@Component({
  selector: 'bs-book-search',
  template: `
  <div id="search-component">
    <h4>Search in your library</h4>
    <input id="search-box" #searchInput (input)="this.term$.next(searchInput.value)"/>
    <div>
      <div *ngFor="let book of books$ | async"
          (click)="gotoDetail(book)" class="search-result">
          {{book.title}}
      </div>
    </div>
  </div>
  `,
  styleUrls: ['book-search.component.css'],
  providers: [SearchService]
})
export class BookSearchComponent implements OnInit {
  term$: Subject<string> = new Subject<string>()
  books$: Observable<Book[]>;

  constructor(
    private searchService: SearchService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.books$ =
       this.searchService.search(<Observable<string>>this.term$);
  }

  gotoDetail(book: Book): void {
    // The router service will help here
    // this.router.navigate([''])
  }
}