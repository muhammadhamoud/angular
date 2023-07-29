import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PropertyService } from '../property.service';
import { Property, PropertyType } from '../property.model';
import { NotificationService } from 'src/app/core/core.module';
import { Router } from '@angular/router';
import { AddPropertyTypeComponent } from '../add-property-type/add-property-type.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'ROI-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddPropertyComponent {
  propertyForm: FormGroup;

  propertyTypes: PropertyType[] | undefined;

  constructor(
    private fb: FormBuilder, 
    private propertyService: PropertyService,
    private notificationservice: NotificationService,
    private router: Router,
    public dialog: MatDialog
    ) {
    this.propertyForm = this.fb.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      legalOwner: [null],
      propertyType: [null],
      numberOfFloors: [null],
      totalRooms: [null],
      numberOfBeds: [null],
      propertyInformationUrl: [null],
      checkOutTime: [null],
      checkInTime: [null],
      latitude: [null],
      longitude: [null],
      baseLanguage: [null],
    });

    this.propertyService.getPropertyTypes().subscribe(types => {
      this.propertyTypes = types;
      // console.log(this.propertyTypes)
    });
  }
  onSubmit() {
    const property: Property = {
    code: this.propertyForm.value.code,
    name: this.propertyForm.value.name,
    legal_owner: this.propertyForm.value.legalOwner,
    property_type: this.propertyForm.value.propertyType,
    number_of_floors: this.propertyForm.value.numberOfFloors,
    total_rooms: this.propertyForm.value.totalRooms,
    number_of_beds: this.propertyForm.value.numberOfBeds,
    property_information_url: this.propertyForm.value.propertyInformationUrl,
    check_out_time: this.propertyForm.value.checkOutTime,
    check_in_time: this.propertyForm.value.checkInTime,
    latitude: this.propertyForm.value.latitude,
    longitude: this.propertyForm.value.longitude,
    base_language: this.propertyForm.value.baseLanguage,
    };
    if (this.propertyForm.valid) {
      this.propertyService.createProperty(property).subscribe((result: any) => {
        console.log(this.router)
        this.router.navigate(['/property']);
        // console.log(result)
        this.notificationservice.success(result.name + " has been added.")
      }, error => {
        this.notificationservice.error(error.message)
      });
    }
}

openDialog() {
    const dialogRef = this.dialog.open(AddPropertyTypeComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      // TODO class onSubmitPropertyType()
    });
  }

}
