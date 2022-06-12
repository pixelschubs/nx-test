import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NxWelcomeComponentModule } from '@test-organization/nx-welcome';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NxWelcomeComponentModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
