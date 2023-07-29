import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import {
  selectSettingsLanguage,
  AppState
} from '../../core/core.module';

@Component({
  selector: 'ROI-html-content',
  templateUrl: './html-content.component.html',
  styleUrls: ['./html-content.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class HtmlContentComponent {
  htmlContent: SafeHtml | undefined;
  language$: Observable<string> | undefined;

  constructor(private store: Store<AppState>, private http: HttpClient, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.language$ = this.store.pipe(select(selectSettingsLanguage));
    this.http.get('assets/markdown/about_ar.html', { responseType: 'text' })
    .subscribe((data: string) => {
      this.htmlContent = this.sanitizer.bypassSecurityTrustHtml(data);
      console.log(data)
    });
    // this.http.get('assets/markdown/about_ar.html', { responseType: 'text' })
    //   .subscribe((data: string) => {
    //     this.htmlContent = data;
    //     console.log(this.htmlContent)
    //   });
  }
}
