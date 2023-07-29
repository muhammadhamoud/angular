import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyComponent } from './property/property.component';
import { PropertyRoutingModule } from './property-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AddPropertyComponent } from './add-property/add-property.component';
import { AddPropertyTypeComponent } from './add-property-type/add-property-type.component';

// import * as fromAddProperty from '../property/add-property/add-property-state/add-property.reducer';
// import { AddPropertyEffects } from '../property/add-property/add-property-state/add-property.effects';
// import * as fromAddPropertyType from '../property/add-property-type/add-property-type-state/add-property-type.reducer';
// import { AddPropertyTypeEffects } from '../property/add-property-type/add-property-type-state/add-property-type.effects';
// import { StoreModule } from '@ngrx/store';
// import * as fromProperty from './property.reducer';
// import { EffectsModule } from '@ngrx/effects';
// import { PropertyEffects } from './property.effects';

@NgModule({
  declarations: [
    PropertyComponent,
    AddPropertyComponent,
    AddPropertyTypeComponent
  ],
  imports: [
    CommonModule,
    PropertyRoutingModule,
    SharedModule,
    // StoreModule.forFeature(fromProperty.propertyFeatureKey, fromProperty.reducer),
    // EffectsModule.forFeature([PropertyEffects, AddPropertyEffects, AddPropertyTypeEffects]),
    // StoreModule.forFeature(fromAddProperty.addPropertyFeatureKey, fromAddProperty.reducer),
    // StoreModule.forFeature(fromAddPropertyType.addPropertyTypeFeatureKey, fromAddPropertyType.reducer)
  ]
})
export class PropertyModule { }
