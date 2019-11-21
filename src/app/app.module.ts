import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './components/page1/page1.component';
import { Page2Component } from './components/page2/page2.component';
import { TestComponent } from './childcomponents/test/test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Test1Component } from './childcomponents/test1/test1.component';
import { Test2Component } from './childcomponents/test2/test2.component';
import { Test3Component } from './childcomponents/test3/test3.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    TestComponent,
    Test1Component,
    Test2Component,
    Test3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCheckboxModule,
    MatTabsModule,
    NgxExtendedPdfViewerModule
  ],
  entryComponents:[TestComponent] ,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
