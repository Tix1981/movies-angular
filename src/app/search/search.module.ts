import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SearchComponent } from '../components/search/search.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  declarations: [
    SearchComponent
  ],
  exports: [
    SearchComponent,
    FormsModule
  ]
})
export class SearchModule { }
