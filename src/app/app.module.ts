import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { StickyFooterComponent } from './sticky-footer/sticky-footer.component';
import {AppServiceService} from './service/app-service.service';

@NgModule({
  declarations: [
    AppComponent,
    StickyFooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: StickyFooterComponent
      }
    ])
  ],
  providers: [AppServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
