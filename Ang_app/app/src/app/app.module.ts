import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HoverComponent } from './hover/hover.component';
import { HomeComponent } from './home/home.component';


import { SolutionsComponent } from './solutions/solutions.component';
import { ServiceComponent } from './service/service.component';
import { ItconsultingComponent } from './itconsulting/itconsulting.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { MailComponent } from './mail/mail.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DeleteComponent } from './technologies/delete/delete.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoute:Routes=[
  {path:'',redirectTo:'Home',pathMatch:'full'},
 
  { path:'Home', component: HomeComponent},
  {path:'AboutUs',component:AboutusComponent},
  {path:'ItConsulting',component:ItconsultingComponent},
  {path:'Data',component:SolutionsComponent},
  {path:'Technologies',component:TechnologiesComponent},
  {path:'Mail',component:MailComponent},
  {path:'Contact', component:ContactComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HoverComponent,
    HomeComponent,
    SolutionsComponent,
    ServiceComponent,
    TechnologiesComponent,
    MailComponent,
    // AboutComponent,
    AboutusComponent,
    ContactComponent,
    DeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    RouterModule.forRoot(appRoute),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
