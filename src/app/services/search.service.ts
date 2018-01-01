import {Injectable}     from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import {Book} from '../types/book';
import 'rxjs/add/operator/switchMap'

@Injectable()
export class SearchService {
  constructor(private http: Http) {}

  search(term: Observable<string>): Observable<Book[]> {
    return this.raw_search(term);
  }

  private raw_search(term$: Observable<string>): Observable<Book[]> {
    const url = `app/books/?title=`;

    return term$
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap((term: string)=>
        term ? this.http.get(url+term)
          .map((res: Response) => res.json().data as Book[]) :
          Observable.of<Book[]>([]))
          .catch((err: Error) => Observable.of<Book[]>([]));
  }
}
