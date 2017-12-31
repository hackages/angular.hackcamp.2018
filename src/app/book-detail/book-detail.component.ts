import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params}   from '@angular/router';
import {Location}                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import {AppService} from '../services/app.service';
import {Book} from '../types/book';

@Component({
  selector: 'bs-book-detail',
  styleUrls: ['book-detail.component.css'],
  template: `
  <div *ngIf="book">
    <h2>{{book.title}} details!</h2>
    <div>
      <label>Id: </label>{{book.id}}
    </div>
    <div>
      <label>Title: </label>
      <input [(ngModel)]="book.title" placeholder="title"/>
    </div>
    <button (click)="goBack()">Back</button>
    <button (click)="save()">Save</button>
  </div>
  `,
})
export class BookDetailComponent implements OnInit {
  book: Book;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private appService: AppService) {
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.appService.getBook(+params['id']))
      .subscribe(book => this.book = book);
  }

  save(): void {
    this.appService.update(this.book).subscribe(this.goBack.bind(this));
  }

  goBack(): void {
    this.location.back();
  }
}
