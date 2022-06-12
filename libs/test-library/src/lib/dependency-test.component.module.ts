import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DependencyTestComponent } from './dependency-test.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DependencyTestComponent],
  exports: [DependencyTestComponent],
})
export class DependencyTestComponentModule {}
