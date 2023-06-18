import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { ValidatorsComponent } from './validators/validators.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ChefsComponent } from './components/chefs/chefs.component';
import { ChefComponent } from './components/chef/chef.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { PlatsComponent } from './components/plats/plats.component';
import { PlatComponent } from './components/plat/plat.component';
import { ArticleComponent } from './components/article/article.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { AddChefComponent } from './components/add-chef/add-chef.component';
import { AddPlatComponent } from './components/add-plat/add-plat.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddBlogComponent } from './components/add-blog/add-blog.component';
import { AdminComponent } from './components/admin/admin.component';
import { PlatAdminComponent } from './components/plat-admin/plat-admin.component';
import { PlatInfoComponent } from './components/plat-info/plat-info.component';
import { EditPlatComponent } from './components/edit-plat/edit-plat.component';




@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    ValidatorsComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    ChefsComponent,
    ChefComponent,
    ReservationComponent,
    HomeComponent,
    BlogComponent,
    PlatsComponent,
    PlatComponent,
    ArticleComponent,
    FeedbackComponent,
    AddChefComponent,
    AddPlatComponent,
    AddBlogComponent,
    AdminComponent,
    PlatAdminComponent,
    PlatInfoComponent,
    EditPlatComponent,

   
  
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
