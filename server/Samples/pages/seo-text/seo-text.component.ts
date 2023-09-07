import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Input } from '@angular/core';
import { DbAbstractionLayer } from '@nodeart/dal';
import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-seo-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './seo-text.component.html',
  styleUrls: ['./seo-text.component.scss']
})
export class SeoTextComponent implements OnChanges{

  /**
   * Page url
   */
  @Input() url: string;

  /**
   * Index of text in `blocks` array
   */
  @Input() indexBlock: number = 0;

  /**
   * SEO text
   */
  private seoText: string;
  constructor(protected dal: DbAbstractionLayer) {

  }

  ngOnChanges() {
      console.log(this.url, ' <> ', this.indexBlock);
      this.dal.getSeoText(this.url, this.indexBlock).subscribe(data => {
          this.seoText = data;
      });
  }

}