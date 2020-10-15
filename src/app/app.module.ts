import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';

import { AppComponent } from './app.component';
import {HeaderComponent} from './main/layout/header/header.component';
import {FooterComponent} from './main/layout/footer/footer.component';
import {ContentComponent} from './main/layout/content/content.component';
import {CardComponent} from './main/layout/content/apps/card/card.component';

@NgModule({
  declarations: [AppComponent,
  HeaderComponent,
    FooterComponent,
    ContentComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
