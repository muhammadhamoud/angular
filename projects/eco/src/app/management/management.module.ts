import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementRoutingModule } from './management-routing.module';
import { ConnectorComponent } from './connector/connector.component';
import { MaterialModule } from '../shared/material/material.module';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ConnectorComponent
  ],
  imports: [
    CommonModule,
    ManagementRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ManagementModule { }
