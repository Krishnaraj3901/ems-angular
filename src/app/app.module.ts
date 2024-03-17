import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeMainComponent } from './employee-main/employee-main.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PagenotFoundComponent } from './pagenot-found/pagenot-found.component';
import {HttpClientModule} from '@angular/common/http';
import { SearchPipe } from './pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { EmployeeViewComponent } from './employee-view/employee-view.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeMainComponent,
    EmployeeAddComponent,
    EmployeeEditComponent,
    HeaderComponent,
    FooterComponent,
    PagenotFoundComponent,
    SearchPipe,
    EmployeeViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
