import {Component, OnInit} from '@angular/core';
import {books} from '../../../books';

@Component({
  selector: 'app-books-view',
  templateUrl: './books-view.component.html',
  styleUrls: ['./books-view.component.scss']
})

export class BooksViewComponent implements OnInit {
  books = books;
  constructor() {
  }

  ngOnInit() {
  }
}
