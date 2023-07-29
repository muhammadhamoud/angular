import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from 'projects/roi/src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

export function httpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(
    http,
    `${environment.i18nPrefix}/assets/i18n/`,
    '.json'
  );
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: httpLoaderFactory,
          deps: [HttpClient]
        }
      }),

  ],
  exports: [
    TranslateModule,
  ]
})
export class SharedModulesModule { }
