import { Component, OnInit } from '@angular/core';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../core/core.module';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import {
  selectSettingsLanguage,
  AppState
} from '../../core/core.module';

@Component({
  selector: 'ROI-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  markdownfile: string | undefined;
  language$: Observable<string> | undefined;
  
  constructor(
    private store: Store<AppState>,
  ) {
    // this.updateMarkdownFile();
  }

  ngOnInit(): void {
    this.language$ = this.store.pipe(select(selectSettingsLanguage));
    this.language$.subscribe(language => {
      if (language === 'ar') {
        this.markdownfile = 'assets/markdown/about_ar.md';
      } else {
        this.markdownfile = 'assets/markdown/about_en.md';
      }
    });
  }

  onLoad(data:any){
    console.log(data);
     }
    
  onError(data:any){
  console.log(data);
  }

  // updateMarkdownFile() {
  //   // if (this.language$ === 'ar') {
  //   //   this.markdownfile = 'assets/markdown/aboutar.md';
  //   // } else {
  //   //   this.markdownfile = 'assets/markdown/abouten.md';
  //   // }
  // }


}
