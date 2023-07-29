import { Component } from '@angular/core';

@Component({
  selector: 'ROI-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  onLoad(data:any){
    // console.log(data);
     }
    
     onError(data:any){
      // console.log(data);
     }
}
