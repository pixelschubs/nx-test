import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { DependencyTestComponentModule } from '@test-organization/test-library';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, DependencyTestComponentModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
