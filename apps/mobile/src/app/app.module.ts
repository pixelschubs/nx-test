import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NxWelcomeComponentModule } from '@test-organization/nx-welcome';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NxWelcomeComponentModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
