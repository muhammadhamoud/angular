import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { ComponentComponent } from './component/component.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { TodoEffects } from '../todo/state/todo.effects';
import * as fromTodo from '../todo/state/todo.reducer';
import { FEATURE_NAME, reducers } from './todos.state';
import { TodosEffects } from './todos.effects';

@NgModule({
  declarations: [
    ComponentComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    StoreModule.forFeature(fromTodo.todoFeatureKey, fromTodo.reducer),
    // StoreModule.forFeature(FEATURE_NAME, reducers),
    EffectsModule.forFeature([TodoEffects, TodosEffects])
  ]
})
export class TodoModule { }
