import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TopBarComponent} from './component/nav/top-bar/top-bar.component';
import {BooksViewComponent} from './component/display/books/books-view.component';
import {MatIconModule} from '@angular/material';
import {BookComponent} from './component/instance/book/book.component';
import {BookDetailsComponent} from './component/instance/book-details/book-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    BooksViewComponent,
    BookComponent,
    BookDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    RouterModule.forRoot([
      {path: 'books', component: BooksViewComponent},
      {path: 'book/:bookId', component: BookDetailsComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
