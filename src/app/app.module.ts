import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShareComponent } from './share/share.component';
import { CeiboShare } from 'ng2-social-share';
// import { CeiboShareDirective } from './ceibo-share.directive';

@NgModule({
  declarations: [
    AppComponent,
    ShareComponent,
    CeiboShare
    // CeiboShareDirective
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
