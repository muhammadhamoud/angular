import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { ContentComponent } from '../blog/content/content.component';
import { SharedModule } from '../shared/shared.module';
import { LoadmarkdownModule } from '../shared/load-contents.module';
import { HtmlContentComponent } from './html-content/html-content.component';

@NgModule({
  declarations: [
    BlogComponent,
    ContentComponent,
    HtmlContentComponent,
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule,
    LoadmarkdownModule,
    // HttpClientModule,
    // MarkdownModule.forRoot({
    //   loader: HttpClient, // optional, only if you use [src] attribute
    //   markedOptions: {
    //     provide: MarkedOptions,
    //     useValue: {
    //       gfm: true,
    //       breaks: true,
    //       pedantic: false,
    //       smartLists: true,
    //       smartypants: false,
    //     },
    //   },
    // }),
  ],
})
export class BlogModule { }
