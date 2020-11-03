import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import {FormsModule} from '@angular/forms'; //เพิ่ม
import { ExcelService } from './excel.service'; //เพิ่ม


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule //เพิ่ม
  ],
  providers: [ExcelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
