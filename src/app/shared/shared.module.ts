import { RouterModule } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ErrorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  entryComponents: [
  ],
  exports: [
    // Modules
    CommonModule,
    FormsModule,
    // Components
    ErrorComponent,

    // Pipes


  ]
})
export class SharedModule {

}
