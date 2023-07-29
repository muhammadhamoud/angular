import { ChangeDetectorRef, ChangeDetectionStrategy} from '@angular/core';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
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
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HtmlContentComponent implements OnChanges {
  @Input() filePath: string | undefined;
  htmlContent: SafeHtml | undefined;
  language$: Observable<string> | undefined;

  constructor(private store: Store<AppState>, private http: HttpClient, private sanitizer: DomSanitizer, private cdr: ChangeDetectorRef) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['filePath'] && this.filePath) {
      this.loadHtmlContent();
    }
  }
  private loadHtmlContent() {
    this.language$ = this.store.pipe(select(selectSettingsLanguage));
    if (!this.language$ || !this.filePath) {
      return; // Exit early if language$ or baseFilePath is not available
    }
    this.language$.subscribe((language: string) => {
      const fullPath = `${this.filePath}${language}.html`;
      this.http.get(fullPath, { responseType: 'text' })
        .subscribe(
          (data: string) => {
            this.htmlContent = this.sanitizer.bypassSecurityTrustHtml(data);
            // console.log(this.htmlContent);
            this.cdr.markForCheck(); // Manually trigger change detection
          },
          (error) => {
            if (error.status === 404) {
              this.htmlContent = this.sanitizer.bypassSecurityTrustHtml('<h1>404 Not Found</h1>');
              this.cdr.markForCheck(); // Manually trigger change detection
            } else {
              // console.error('Error loading HTML content:', error);
            }
          }
        );
    });
  }
}







  // private loadHtmlContent() {

  //   if (!this.language$ || !this.filePath) {
  //     return; // Exit early if either language$ or filePath is not available
  //   }
  
  //   this.language$.subscribe((language: string) => {
  //     const fullPath = this.filePath;
  //     this.http.get(fullPath, { responseType: 'text' })
  //       .subscribe(
  //         (data: string) => {
  //           this.htmlContent = this.sanitizer.bypassSecurityTrustHtml(data);
  //           console.log(this.htmlContent);
  //         },
  //         (error) => {
  //           console.error('Error loading HTML content:', error);
  //         }
  //       );
  //   });
  // }

  // private loadHtmlContent() {
  //   this.language$ = this.store.pipe(select(selectSettingsLanguage));
  //   if (this.filePath && this.language$) {
  //     this.language$.subscribe((language: string) => {
  //       const fullPath = this.filePath.replace('{{language}}', language);
  //       this.http.get(fullPath, { responseType: 'text' })
  //         .subscribe((data: string) => {
  //           this.htmlContent = this.sanitizer.bypassSecurityTrustHtml(data);
  //           console.log(this.htmlContent);
  //         });
  //     });
  //   }
  // }

  // private loadHtmlContent() {
  //   // this.http.get(this.filePath, { responseType: 'text' })
  //   //   .subscribe((data: string) => {
  //   //     this.htmlContent = this.sanitizer.bypassSecurityTrustHtml(data);
  //   //   });

  //   this.http.get(this.filePath, { responseType: 'text' })
  //   .subscribe((data: string) => {
  //     this.htmlContent = this.sanitizer.bypassSecurityTrustHtml(data);
  //     console.log(data)
  //   });
    
  // }

  // private loadHtmlContent() {
  //   this.language$ = this.store.pipe(select(selectSettingsLanguage));
  //   if (this.filePath && this.language$) {
  //     this.http.get(this.filePath, { responseType: 'text' })
  //       .subscribe((data: string) => {
  //         this.htmlContent = this.sanitizer.bypassSecurityTrustHtml(data);
  //         // console.log(this.htmlContent)
  //       });
  //   }
  // }

  // private loadHtmlContent() {
  //   this.language$ = this.store.pipe(select(selectSettingsLanguage));
  //   if (this.filePath && this.language$) {
  //     this.http.get(this.filePath, { responseType: 'text' })
  //       .subscribe((data: string) => {
  //         this.htmlContent = this.sanitizer.bypassSecurityTrustHtml(data);
  //         // console.log(this.htmlContent)
  //       });
  //   }
  // }