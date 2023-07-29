import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { HtmlContentComponent } from './html-content/html-content.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MarkdownModule.forRoot({
      loader: HttpClient, // optional, only if you use [src] attribute
      markedOptions: {
        provide: MarkedOptions,
        useValue: {
          gfm: true,
          breaks: true,
          pedantic: false,
          smartLists: true,
          smartypants: false,
        },
      },
    }),
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    MarkdownModule,
    HtmlContentComponent
  ],
  declarations: [
    HtmlContentComponent
  ]
})
export class LoadmarkdownModule { }
