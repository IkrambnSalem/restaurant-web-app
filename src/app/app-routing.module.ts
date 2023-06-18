import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBlogComponent } from './components/add-blog/add-blog.component';
import { AddChefComponent } from './components/add-chef/add-chef.component';
import { AddPlatComponent } from './components/add-plat/add-plat.component';
import { AdminComponent } from './components/admin/admin.component';
import { BlogComponent } from './components/blog/blog.component';
import { ChefsComponent } from './components/chefs/chefs.component';
import { EditPlatComponent } from './components/edit-plat/edit-plat.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PlatInfoComponent } from './components/plat-info/plat-info.component';
import { PlatsComponent } from './components/plats/plats.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { SignupComponent } from './components/signup/signup.component';
import { PlatAdminComponent } from './components/plat-admin/plat-admin.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"signupAdmin",component:SignupComponent},
  {path:"subscription",component:SignupComponent},
  {path:"menu",component:PlatsComponent},
  {path:"chefs",component:ChefsComponent},
  {path:"reservation",component:ReservationComponent},
  {path:"blog",component:BlogComponent},
  {path:"feedback",component:FeedbackComponent},
  {path:"add-Chef",component:AddChefComponent},
  {path:"add-plat",component:AddPlatComponent},
  {path:"add-blog",component:AddBlogComponent},
  {path:"admin",component:AdminComponent},
  {path:"platInfo/:id",component:PlatInfoComponent},
  {path:"edit-plat/:id",component:EditPlatComponent},
  {path:"plat-admin",component:PlatAdminComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
