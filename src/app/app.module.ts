import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { GetstudentsComponent } from './Components/getstudents/getstudents.component';
import { SavestudentComponent } from './Components/savestudent/savestudent.component';
import { HttpClientModule } from '@angular/common/http';
import { DeletestudentComponent } from './Components/deletestudent/deletestudent.component';
import { UpdatestudentComponent } from './Components/updatestudent/updatestudent.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GetstudentsComponent,
    SavestudentComponent,
    DeletestudentComponent,
    UpdatestudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
