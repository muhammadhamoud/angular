import { ChangeDetectionStrategy, Component } from '@angular/core';
import {OverlayContainer} from '@angular/cdk/overlay';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PropertyService } from '../property.service';
import { NotificationService } from 'src/app/core/core.module';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PropertyType } from '../property.model';

@Component({
  selector: 'ROI-add-property-type',
  templateUrl: './add-property-type.component.html',
  styleUrls: ['./add-property-type.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddPropertyTypeComponent {
  propertyTypeForm: FormGroup;

  constructor(overlayContainer: OverlayContainer,
    private fb: FormBuilder, 
    private propertyService: PropertyService,
    private notificationservice: NotificationService,
    private router: Router,
    public dialog: MatDialog
    
    ) {
    // overlayContainer.getContainerElement().classList.add('nature-theme');
    this.propertyTypeForm = this.fb.group({
      code: ['', Validators.required],
      description: [null],
      sequence: [null],
    });
}

onSubmitPropertyType() {
  const propertytype: PropertyType = {
    code: this.propertyTypeForm.value.code,
    description: this.propertyTypeForm.value.description,
    sequence: this.propertyTypeForm.value.sequence
  };
  console.log(propertytype)
  if (this.propertyTypeForm.valid) {
    this.propertyService.createPropertyTypes(propertytype).subscribe((result: any) => {
      console.log(this.router)
      this.router.navigate(['/property/add']);
    }, error => {
      this.notificationservice.error(error.code)
    });
  }
}

}
