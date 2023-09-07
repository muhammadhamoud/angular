import { ChangeDetectionStrategy, Component, ViewChild, ElementRef, OnDestroy} from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
import { trigger, transition, animate, style } from '@angular/animations';

import { FeatureItems } from '../data/features.data';

@Component({
  selector: 'ROI-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('carouselAnimation', [
      transition(':increment, :decrement', [
        style({ opacity: 0, transform: 'translateX({{offset}})' }),
        animate('500ms', style({ opacity: 1, transform: 'translateX(0)' })),
      ]),
    ]),
  ],
})
export class HerosComponent {

  // @ViewChild('tabGroup') tabGroup!: MatTabGroup;
  // currentTabIndex = 0;
  // autoSwitching = true;
  // interval: any;
  // @ViewChild(MatTabGroup) tabGroup!: MatTabGroup; // Add the ! operator here to indicate that it will be initialized later
  // interval: any;
  // currentIndex = 0;

  constructor(
    public featureitems: FeatureItems
    ) {
      // this.interval = setInterval(() => {
      //   if (this.autoSwitching) {
      //     this.goToNextTab();
      //   }
      // }, 3000); // 3000 milliseconds (3 seconds)
    }

    // ngOnDestroy() {
    //   clearInterval(this.interval);
    // }
  
    // onTabChange(event: any) {
    //   this.currentTabIndex = event.index;
    // }
  
    // // Function to switch to the next tab
    // goToNextTab() {
    //   const nextIndex = (this.currentTabIndex + 1) % 3; // Change 3 to the total number of tabs
    //   this.currentTabIndex = nextIndex;
    // }


  // ngAfterViewInit() {
  //   this.startCarousel();
  // }

  // startCarousel() {
  //   this.interval = setInterval(() => {
  //     this.nextSlide();
  //   }, 1000); // Set the time interval for automatic slide change (in milliseconds)
  // }

  // nextSlide() {
  //   this.currentIndex = (this.currentIndex + 1) % this.tabGroup._tabs.length;
  //   this.tabGroup.selectedIndex = this.currentIndex;
  // }

  // prevSlide() {
  //   this.currentIndex = (this.currentIndex - 1 + this.tabGroup._tabs.length) % this.tabGroup._tabs.length;
  //   this.tabGroup.selectedIndex = this.currentIndex;
  // }
  

  
}
