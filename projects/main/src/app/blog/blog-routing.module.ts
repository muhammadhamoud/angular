import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { HtmlContentComponent } from './html-content/html-content.component';

const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
    data: { title: 'ROI.menu.intro' }
  },
  {
    path: 'html',
    component: HtmlContentComponent,
    data: { title: 'ROI.menu.intro' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
