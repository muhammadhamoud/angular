import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemQuantityComponent } from './components/item-quantity/item-quantity.component';
import { SimplePageComponent } from './components/simple-page/simple-page.component';
import { TitleComponent } from './components/title/title.component';
import { WordWrapPipe } from './pipes/word-wrap.pipe';
import { MaterialModule } from './material/material.module';



@NgModule({
  declarations: [
    ItemQuantityComponent,
    SimplePageComponent,
    TitleComponent,
    WordWrapPipe
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ItemQuantityComponent,
    SimplePageComponent,
    TitleComponent,
    WordWrapPipe
  ]

})
export class SharedModule { }
