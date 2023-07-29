import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Property } from '../property.model';
import { PropertyService } from '../property.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'ROI-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PropertyComponent implements OnInit {
  
  properties: Observable<any> | undefined;
  
  constructor(private propertyService: PropertyService) { }

  ngOnInit() {
    this.properties = this.propertyService.getProperties()
    };
  onCreateProperty(property: Property) {
    this.propertyService.createProperty(property);
  }

}

