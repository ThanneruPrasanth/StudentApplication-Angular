import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SavestudentComponent } from './Components/savestudent/savestudent.component'; 
import { GetstudentsComponent } from './Components/getstudents/getstudents.component'; 

const routes: Routes = [{path:'savestudent', component:SavestudentComponent},{path:'getstudents',component:GetstudentsComponent}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }