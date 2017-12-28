import {Component, OnInit} from '@angular/core';
import {Router}            from '@angular/router';
import {Observable}        from 'rxjs/Observable';
import {Subject}           from 'rxjs/Subject';
import {SearchService} from '../services/search.service';
import {Book} from '../types/book';

@Component({
  selector: 'bs-book-search',
  templateUrl: 'book-search.template.html',
  styleUrls: ['book-search.component.css'],
  providers: [SearchService]
})
export class BookSearchComponent implements OnInit {
  term$: Subject<string> = new Subject<string>()
  books$: Observable<Book[]>;

  constructor(private searchService: SearchService) {
  }

  ngOnInit(): void {
    this.books$ =
       this.searchService.search(<Observable<string>>this.term$);
  }

  gotoDetail(book: Book): void {
    // The router service will help here
  }
}