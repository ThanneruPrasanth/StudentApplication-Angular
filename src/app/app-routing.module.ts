import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SavestudentComponent } from './Components/savestudent/savestudent.component'; 
import { GetstudentsComponent } from './Components/getstudents/getstudents.component'; 
import { DeletestudentComponent } from './Components/deletestudent/deletestudent.component';
import { UpdatestudentComponent } from './Components/updatestudent/updatestudent.component';

const routes: Routes = [{path:'savestudent', component:SavestudentComponent},
{path:'getstudents',component:GetstudentsComponent},
{path:'deleteStudent',component: DeletestudentComponent},
{path:'updateStudent', component:UpdatestudentComponent}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }